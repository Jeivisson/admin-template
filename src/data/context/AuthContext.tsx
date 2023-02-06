import Router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Cookies from 'js-cookie';
import Usuario from '../../model/Usuario';

interface AuthContextProps {
  usuario?: Usuario;
  loading?: boolean;
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps>({});

async function NormUser(userFirebase: firebase.User): Promise<Usuario> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0]?.providerId,
    imageUrl: userFirebase.photoURL,
  };
}

function GenCookie(logged: boolean) {
  if (logged) {
    Cookies.set('admin-template-auth', logged, {
      expires: 7,
    });
  } else {
    Cookies.remove('admin-template-auth');
  }
}

export function AuthProvider(props: any) {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function confSection(userFirebase) {
    if (userFirebase?.email) {
      const user = await NormUser(userFirebase);
      setUsuario(user);
      GenCookie(true);
      setLoading(false);
      return user.email;
    } else {
      setUsuario(null);
      GenCookie(false);
      setLoading(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setLoading(true);
      const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

      confSection(resp.user);
      Router.push('/');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await confSection(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(confSection);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, loading, loginGoogle, logout }}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
