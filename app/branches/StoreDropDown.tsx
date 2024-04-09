import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Store 1',
  },
  {
    key: '2',
    label: 'Store 2',
  },
  {
    key: '3',
    label: 'Store 3',
  },
  {
    key: '4',
    label: 'Store 4',
  },
];

const StoreDropDiagram: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['1'],
    }}
  >
    <Typography.Link>
      <Space>
        Store 1
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default StoreDropDiagram;