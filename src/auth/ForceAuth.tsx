import Image from 'next/image';
import { useRouter } from 'next/router';
import loadingImg from '../../public/Images/loading.gif';
import useAuth from '../data/hook/useAuth';

export default function ForceAuth(props: any) {
  const router = useRouter();
  const { usuario, loading } = useAuth();

  function renderContent() {
    return <>{props.children}</>;
  }

  function renderLoading() {
    return (
      <div
        className={`
      flex justify-center items-center h-screen`}
      >
        <Image alt="" src={loadingImg} />
      </div>
    );
  }

  if (!loading && usuario?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/auth');
    return null;
  }
}
