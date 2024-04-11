import React, { useState } from 'react';
import './index.css';
import {
  BarChartOutlined,
  AccountBookOutlined,
  SnippetsOutlined,
  ShopOutlined,
  ProductOutlined,
  TeamOutlined,
  CompassOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  ProjectOutlined,
  MoneyCollectOutlined,
  FormOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Layout, Menu, Switch, theme } from 'antd';
import { useRouter } from 'next/navigation';
import Overview from './main/overview.tsx';
import Administration from './Administration.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Overview', 'Overview', <UserOutlined />, []),
  getItem('Administration', 'Administration', <TeamOutlined />, []),
  getItem('CRM', 'CRM', <SnippetsOutlined />, []),
  getItem('Map', 'Map', <CompassOutlined />, []),
  getItem('Sales', 'Sales', <BarChartOutlined />, []),
  getItem('Purchasing', 'Purchasing', <AccountBookOutlined />, []),
  getItem('Inventory', 'Inventory', <CodeSandboxOutlined />, []),
  getItem('Product', 'Product', <ProductOutlined />, []),
  getItem('Branches', 'Branches', <ShopOutlined />, []),
  getItem('Project Management', 'Project Management', <ProjectOutlined />, []),
  getItem('Membership', 'Membership', <MoneyCollectOutlined />, []),
  getItem('Reports', 'Reports', <FormOutlined />, []),
  getItem('Settings', 'Settings', <SettingOutlined />, []),
];

export function MenuBar() {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const router = useRouter();
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    router.push(`/${e.keyPath.reverse().join('/')}`);
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['overview']}
        selectedKeys={[current]}
        mode={"inline"}
        items={items}
      />
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </>
  );
}

export default MenuBar;