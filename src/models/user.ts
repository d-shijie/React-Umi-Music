import { checkLoginStatusApi, logoutApi } from '@/services/user';
import { useState } from 'react';

const useUser = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>();
  const [userId, setUserId] = useState<number>();

  const checkLoginStatus = async (
    cb: (status?: boolean, userId?: number) => void,
  ) => {
    const { data } = await checkLoginStatusApi();
    if (data.profile) {
      setUserId(data.profile.userId);
      cb(true, data.profile.userId);
    } else {
      cb(false);
    }
    setLoginStatus(!!data.profile);
  };

  const logout = () => {
    logoutApi().then(() => {
      setLoginStatus(false);
      setUserId(0);
      setUserInfo({});
    });
  };
  return {
    userInfo,
    setUserInfo,
    loginStatus,
    userId,
    logout,
    checkLoginStatus,
  };
};

export default useUser;
