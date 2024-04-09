import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
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
        <a>Edit {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    products: 'Member',
    totVal: '$1000',
    date: '1 year',
    tags: ['membership'],
  },
  {
    key: '2',
    products: 'Bronze Member',
    totVal: '$5000',
    date: '2 years',
    tags: ['bronze'],
  },
  {
    key: '3',
    products: 'Sliver Member',
    totVal: '$10000',
    date: '3 years',
    tags: ['sliver'],
  },
  {
    key: '4',
    products: 'Gold Member',
    totVal: '$50000',
    date: '5 years',
    tags: ['gold'],
  },
];

const ProgramTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default ProgramTable;