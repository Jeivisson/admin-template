import { IconBell, IconHome, IconLogout, IconSettings } from '../Icons';
import Logo from '../Logo/Logo';
import { MenuItem } from '../MenuItem/MenuItem';

export default function SideMenu() {
  return (
    <aside className={`dark:bg-gray-900  bg-gray-200  text-gray-700 flex flex-col`}>
      <div
        className={` flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Inicio" icon={IconHome} />
        <MenuItem url="/ajustes" text="Ajustes" icon={IconSettings} />
        <MenuItem url="/notificacoes" text="Notificações" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log('logout')}
          text="Sair"
          icon={IconLogout}
          className={`text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white hover:text-white`}
        />
      </ul>
    </aside>
  );
}
