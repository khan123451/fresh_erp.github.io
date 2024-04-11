import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  products: string;
  totVal: string;
  quantity: string;
  date: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Products',
    dataIndex: 'products',
    key: 'products',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Buying Price',
    dataIndex: 'totVal',
    key: 'totVal',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Arrival Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Increase</a>
        <a>Edit</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    products: 'Tone',
    totVal: '$320',
    quantity: '3 Packets',
    date: '06/05/24',
    tags: ['nice', 'water base'],
  },
  {
    key: '2',
    products: 'Lip Stick',
    totVal: '$257',
    quantity: '3 Packets',
    date: '21/05/24',
    tags: ['nice'],
  },
  {
    key: '3',
    products: 'Herb Tone',
    totVal: '$405',
    quantity: '5 Packets',
    date: '05/05/24',
    tags: ['health', 'nice'],
  },
  {
    key: '4',
    products: 'Facial Cream',
    totVal: '$502',
    quantity: '10 Packets',
    date: '15/08/24',
    tags: ['cream', 'nice'],
  },
];

const InventoryTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default InventoryTable;