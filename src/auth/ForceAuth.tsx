import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';
import loadingImg from '../../public/Images/loading.gif';
import useAuth from '../data/hook/useAuth';

export default function ForceAuth(props: any) {
  const router = useRouter();
  const { usuario, loading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
          if(!document.cookie.includes("admin-template-auth")) {
            window.location.href = "/auth"
          }
          `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div
        className={`
      flex justify-center items-center h-screen`}
      >
        <Image alt="" priority={true} src={loadingImg} />
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
