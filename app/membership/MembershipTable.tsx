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
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Points',
    dataIndex: 'points',
    key: 'points',
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
        <a>Edit</a>
        <a>Contact</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Kim',
    contact: '59087891',
    points: '5500',
    date: '06/05/21',
    tags: ['sliver'],
  },
  {
    key: '2',
    name: 'Jimmy',
    contact: '78190781',
    points: '1230',
    date: '06/06/24',
    tags: ['member'],
  },
  {
    key: '3',
    name: 'Johnny',
    contact: '67668901',
    points: '127810',
    date: '05/05/20',
    tags: ['gold'],
  },
  {
    key: '4',
    name: 'Khan',
    contact: '28930189',
    points: '3123',
    date: '05/05/20',
    tags: ['sliver'],
  },
];

const MembershipTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default MembershipTable;