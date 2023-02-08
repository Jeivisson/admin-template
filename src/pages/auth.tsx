import { useState } from 'react';
import route from 'next/router';
import AuthInput from '../auth/AuthInput';
import { IconWarning } from '../components/Icons';
import useAuth from '../data/hook/useAuth';

export default function Auth() {
  const { createUser, login, loginGoogle } = useAuth();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [mode, setMode] = useState<'login' | 'cadastro'>('login');

  function errorFn(message: any, time = 5) {
    setError(message);
    setTimeout(() => setError(null), time * 1000);
  }

  async function submit() {
    try {
      if (mode === 'login') {
        await login(email, pw);
      } else {
        await createUser(email, pw);
      }
    } catch (e) {
      await errorFn(e?.message ?? 'Erro inesperado');
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img
          className={`h-screen w-full object-cover`}
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de Autenticação"
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3 `}>
        <h1 className={`text-xl font-bold mb-5 `}>
          {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
        </h1>
        {error ? (
          <div className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}>
            {IconWarning()}
            <span className={`ml-3 text-sm`}>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput type="email" label="Email" value={email} ChangeValue={setEmail} requiered />
        <AuthInput type="password" label="Password" value={pw} ChangeValue={setPw} requiered />
        <button
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
          onClick={submit}
        >
          {mode === 'login' ? 'Entre' : 'Cadastrar'}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`} onClick={loginGoogle}>
          Entrar com o Goole
        </button>

        {mode === 'login' ? (
          <p className={`mt-8 `}>
            Novo por aqui?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1`}
              onClick={() => setMode('cadastro')}
            >
              Crie uma conta
            </a>
          </p>
        ) : (
          <p className={`mt-8 `}>
            Já faz parte da nossa cominidade?
            <a
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1`}
              onClick={() => setMode('login')}
            >
              Entre com suas Credenciais
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
