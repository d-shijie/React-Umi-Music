import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
  openDrawer: () => void;
}
const Header: React.FC<Props> = ({ openDrawer }) => {
  const handOpenDrawer = () => {
    openDrawer();
  };
  return (
    <div className="flex justify-between items-center">
      <MenuOutlined onClick={handOpenDrawer} style={{ fontSize: '20px' }} />
      <SearchOutlined style={{ fontSize: '20px' }} />
    </div>
  );
};
export default Header;
