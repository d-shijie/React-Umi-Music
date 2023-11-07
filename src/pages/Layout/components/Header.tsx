import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

interface Props {
  openDrawer: () => void;
}
const Header: React.FC<Props> = ({ openDrawer }) => {
  const handOpenDrawer = () => {
    openDrawer();
  };
  return (
    <div className="flex justify-between items-center bg-[#fff] p-[12px]">
      <MenuOutlined onClick={handOpenDrawer} style={{ fontSize: '20px' }} />
      <Input
        disabled
        placeholder="placeholder content"
        prefix={<SearchOutlined />}
        className="mx-[12px] rounded-full bg-[#e6e5fb]"
      />
      <SearchOutlined style={{ fontSize: '20px' }} />
    </div>
  );
};
export default Header;
