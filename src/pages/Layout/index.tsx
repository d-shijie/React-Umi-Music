import { checkQrStatusApi, createQrApi, createQrKeyApi } from '@/services/user';
import { Outlet } from '@umijs/max';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import UserDrawer from './components/UserDrawer';

const Layout: React.FC = () => {
  const [qrKey, setQrkey] = useState<string>('');
  const [qrUrl, setQrUrl] = useState<string>('');
  const createQrKey = async () => {
    const { data } = await createQrKeyApi();
    setQrkey(data.unikey);
  };
  const createQr = async () => {
    const { data } = await createQrApi(qrKey);
    setQrUrl(data.qrurl);
  };
  const checkQrStatus = async () => {
    const { data } = await checkQrStatusApi(qrKey);
    console.log(data);
  };
  useEffect(() => {
    createQrKey();
  }, []);

  useEffect(() => {
    createQr();
    const internaler = setInterval(checkQrStatus, 1000);
    return () => {
      clearInterval(internaler);
    };
  }, [qrKey]);

  const userDrawerRef = useRef<any>(null);
  const handleOpenDrawer = () => {
    userDrawerRef.current?.onOpen();
  };

  return (
    <div className="bg-[#eff0f3] h-[100vh] ">
      <section className="p-[12px]">
        <Header openDrawer={handleOpenDrawer} />
      </section>
      <UserDrawer ref={userDrawerRef} qrUrl={qrUrl} />
      <section className="p-[12px]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
