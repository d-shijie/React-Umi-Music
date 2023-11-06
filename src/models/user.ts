import { checkLoginStatusApi } from '@/services/user';
import { useState } from 'react';

const useUser = () => {
  const [loginStatus, setLoginStatus] = useState<boolean>();
  const [userInfo, setUserInfo] = useState<any>();
  const [userId, setUserId] = useState<number>();
  const checkLoginStatus = async () => {
    const { data } = await checkLoginStatusApi();
    setLoginStatus(data.code === 200);
    setUserId(data.profile.userId);
  };
  checkLoginStatus();
  return {
    userInfo,
    setUserInfo,
    loginStatus,
    userId,
  };
};

export default useUser;
