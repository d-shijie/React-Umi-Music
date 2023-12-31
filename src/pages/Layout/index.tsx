import { checkQrStatusApi, createQrApi, createQrKeyApi } from '@/services/user';
import { Outlet, useModel } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import UserDrawer from './components/UserDrawer';

const Layout: React.FC = () => {
  const [qrUrl, setQrUrl] = useState<string>('');
  const [status, setStatus] = useState<number>(801);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const { checkLoginStatus } = useModel('user');
  const createQr = async (key: string) => {
    const { data } = await createQrApi(key);

    setQrUrl(data.qrurl);
  };

  const checkQrStatus = async (key: string) => {
    const { code, message: msg } = await checkQrStatusApi(key);
    setStatus(code);
    switch (code) {
      case 800:
        message.info(msg);
        clearInterval(timer);
        break;
      case 801:
        break;
      case 802:
        message.info(msg);
        break;
      case 803:
        clearInterval(timer);
        location.reload();
        break;
    }
  };
  const createQrKey = async () => {
    const { data } = await createQrKeyApi();
    createQr(data.unikey);
    setTimer(setInterval(() => checkQrStatus(data.unikey), 2000));
  };

  useEffect(() => {
    checkLoginStatus((status) => {
      console.log(status);

      if (!status) {
        createQrKey();
      }
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const userDrawerRef = useRef<any>(null);
  const handleOpenDrawer = () => {
    userDrawerRef.current?.onOpen();
  };

  return (
    <div className="bg-[#eff0f3] h-[100vh] ">
      <section>
        <Header openDrawer={handleOpenDrawer} />
      </section>
      <UserDrawer ref={userDrawerRef} qrUrl={qrUrl} status={status} />
      <section className="h-[86vh] overflow-y-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
