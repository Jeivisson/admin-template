import useAppData from '../../data/hook/useAppData';
import { AltThemeButton } from '../AltThemeButton/AltThemeButton';
import Title from '../Title/Title';
import UserAvatar from '../UserAvatar.tsx/AvatarUser';

interface TopBarProps {
  title: string;
  subtitle: string;
}

export default function TopBar(props: TopBarProps) {
  const { theme, altTheme } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <AltThemeButton theme={theme} altTheme={altTheme} />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  );
}
