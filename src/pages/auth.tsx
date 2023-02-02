import { useState } from 'react';
import AuthInput from '../auth/AuthInput';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [mode, setMode] = useState<'login' | 'cadastro'>('login');

  function submit() {
    if (mode === 'login') {
      console.log('login');
    } else {
      console.log('castrar');
    }
  }

  return (
    <div className={`flex flex-col h-screen items-center justify-center`}>
      <div className={`w-1/2 `}>
        <h1 className={`text-xl font-bold mb-5 `}>
          {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
        </h1>
        <AuthInput type="email" label="Email" value={email} ChangeValue={setEmail} requiered />
        <AuthInput type="password" label="Password" value={pw} ChangeValue={setPw} requiered />
        <button
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
          onClick={submit}
        >
          {mode === 'login' ? 'Entre' : 'Cadastrar'}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`} onClick={submit}>
          Entrar com o Goole
        </button>
      </div>
    </div>
  );
}
