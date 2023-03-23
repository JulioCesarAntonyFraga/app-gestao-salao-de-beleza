import React from 'react';
import Sidebar from './Sidebar';
import { Layout as AntdLayout } from 'antd';

const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <Sidebar />
      {children}
    </AntdLayout>
  );
};

export default Layout;