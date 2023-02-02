import useAppData from '../../data/hook/useAppData';
import { AltThemeButton } from '../AltThemeButton/AltThemeButton';
import Title from '../Title/Title';

interface TopBarProps {
  title: string;
  subtitle: string;
}

export default function TopBar(props: TopBarProps) {
  const { theme, altTheme } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <AltThemeButton theme={theme} altTheme={altTheme} />
      </div>
    </div>
  );
}
