import ForceAuth from '../../auth/ForceAuth';
import useAppData from '../../data/hook/useAppData';
import Content from '../Content/Content';
import SideMenu from '../SideMenu/SideMenu';
import TopBar from '../TopBar/TopBar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuth>
      <div className={`${theme}  flex h-screen w-screen`}>
        <SideMenu />
        <div className={'flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800'}>
          <TopBar title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
}
