import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Facial Cream',
  },
  {
    key: '2',
    label: 'Tone',
  },
  {
    key: '3',
    label: 'Lip Stick',
  },
  {
    key: '4',
    label: 'Face Wash',
  },
];

const ItemDropDown: React.FC = () => (
    <div>
        <b>Item Name: </b>
        <Dropdown
            menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['1'],
            }}
        >
            <Typography.Link>
            <Space>
                Facial Cream
                <DownOutlined />
            </Space>
            </Typography.Link>
        </Dropdown>
    </div>
);

export default ItemDropDown;