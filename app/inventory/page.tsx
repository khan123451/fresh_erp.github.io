'use client'
import React from 'react';
import { Layout } from 'antd/lib';
import MenuBar from '../main/menubar';
import Inventory from './inventory';
const { Sider } = Layout;

const InventoryPage = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <MenuBar />
      </Sider>
      <Inventory />
    </Layout>
  );
};

export default InventoryPage;
