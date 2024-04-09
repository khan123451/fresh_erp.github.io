import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Shelf 1',
  },
  {
    key: '2',
    label: 'Shelf 2',
  },
  {
    key: '3',
    label: 'Shelf 3',
  },
  {
    key: '4',
    label: 'Shelf 4',
  },
];

const ShelfDropDown: React.FC = () => (
    <div>
        <b>Shelf Name: </b>
        <Dropdown
            menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['1'],
            }}
        >
            <Typography.Link>
            <Space>
                Shelf 1
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
    </div>
);

export default ShelfDropDown;