import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Project 1',
  },
  {
    key: '2',
    label: 'Project 2',
  },
  {
    key: '3',
    label: 'Project 3',
  },
  {
    key: '4',
    label: 'Project 4',
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
        Project
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default AreaDropDiagram;