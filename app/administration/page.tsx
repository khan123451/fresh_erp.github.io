'use client'
import React from 'react';
import { Layout } from 'antd/lib';
import MenuBar from '../main/menubar';
import Administration from './administration';
const { Sider } = Layout;

const AdministrationPage = () => {
  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <MenuBar />
      </Sider>
      <Administration />
    </Layout>
  );
};

export default AdministrationPage;
