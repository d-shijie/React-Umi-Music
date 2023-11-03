import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center">
      <MenuOutlined style={{ fontSize: '20px' }} />
      <SearchOutlined style={{ fontSize: '20px' }} />
    </div>
  );
};
export default Header;
