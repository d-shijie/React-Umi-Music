import { checkLoginStatusApi } from '@/services/user';
import { useState } from 'react';

const useUser = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>();
  const [userInfo, setUserInfo] = useState<any>();

  const checkLoginStatus = async () => {
    const { data } = await checkLoginStatusApi();
    setLoginStatus(data.code === 200);
  };
  checkLoginStatus();
  return {
    userInfo,
    setUserInfo,
    loginStatus,
  };
};

export default useUser;
