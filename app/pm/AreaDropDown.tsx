import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Singapore',
  },
  {
    key: '2',
    label: 'Tokyo',
  },
  {
    key: '3',
    label: 'Hainan',
  },
  {
    key: '4',
    label: 'Kuala Lumpur',
  },
];

const AreaDropDiagram: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['1'],
    }}
  >
    <Typography.Link>
      <Space>
        Singapore
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default AreaDropDiagram;