import { useModel } from '@umijs/max';
import { Card } from 'antd';
import React from 'react';
const My: React.FC = () => {
  const { userInfo } = useModel('user');
  console.log(userInfo);

  return (
    <div className="px-[12px]">
      <Card className="mt-[34px]">
        <section className="flex flex-col justify-center items-center">
          <img
            className="rounded-full w-[58px] -top-[26px] absolute"
            src={userInfo.profile.avatarUrl}
            alt=""
          />
          <div className="text-[#333a4e] mt-[12px]  text-[18px] tracking-wide font-bold">
            {userInfo.profile.nickname}
          </div>
          <div className="text-[#9b9fa9] mt-[4px] flex justify-center">
            <span>{userInfo.profile.follows} 关注</span>
            <span className="mx-[10px]">{userInfo.profile.followeds} 粉丝</span>
            <span>Lv.{userInfo.level}</span>
          </div>
        </section>
      </Card>
    </div>
  );
};
export default My;
