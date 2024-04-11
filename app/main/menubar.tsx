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
  getItem('Overview', 'overview', <UserOutlined />),
  getItem('Administration', 'administration', <TeamOutlined />),
  getItem('CRM', 'crm', <SnippetsOutlined />),
  getItem('Map', 'map', <CompassOutlined />),
  getItem('Sales', 'sales', <BarChartOutlined />),
  getItem('Purchasing', 'purchasing', <AccountBookOutlined />),
  getItem('Inventory', 'inventory', <CodeSandboxOutlined />),
  getItem('Product', 'product', <ProductOutlined />),
  getItem('Branches', 'branches', <ShopOutlined />),
  getItem('Project Management', 'pm', <ProjectOutlined />),
  getItem('Membership', 'membership', <MoneyCollectOutlined />),
  getItem('Reports', 'reports', <FormOutlined />),
  getItem('Settings', 'settings', <SettingOutlined />),
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