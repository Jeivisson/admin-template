import Router from 'next/router';
import { createContext, useState } from 'react';
import firebase from '../../firebase/config';

interface AuthContextProps {
  usuario?: Usuario;
  loginGoogle: () => Promise<void>;
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

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resp.user?.email) {
      const usuario = await NormUser(resp.user);
      setUsuario(usuario);
      Router.push('/');
    }
  }

  return <AuthContext.Provider value={{ usuario, loginGoogle }}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
