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
import Overview from './overview';
import Administration from './administration';
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
  getItem('Overview', 'overview', <UserOutlined />, null),
  getItem('Administration', 'administration', <TeamOutlined />, null),
  getItem('CRM', 'crm', <SnippetsOutlined />, null),
  getItem('Map', 'map', <CompassOutlined />, null),
  getItem('Sales', 'sales', <BarChartOutlined />, null),
  getItem('Purchasing', 'purchasing', <AccountBookOutlined />, null),
  getItem('Inventory', 'inventory', <CodeSandboxOutlined />, null),
  getItem('Product', 'product', <ProductOutlined />, null),
  getItem('Branches', 'branches', <ShopOutlined />, null),
  getItem('Project Management', 'pm', <ProjectOutlined />, null),
  getItem('Membership', 'membership', <MoneyCollectOutlined />, null),
  getItem('Reports', 'reports', <FormOutlined />, null),
  getItem('Settings', 'settings', <SettingOutlined />, null),
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
        style={{ width: 180, margin: 10 }}
      />
    </>
  );
}

export default MenuBar;