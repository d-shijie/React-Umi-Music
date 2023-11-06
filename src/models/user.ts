import { useState } from 'react';

const useUser = () => {
  const [userInfo, setUserInfo] = useState<any>();
  return {
    userInfo,
    setUserInfo,
  };
};

export default useUser;
