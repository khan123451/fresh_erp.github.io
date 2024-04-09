'use client'
import React, { useRef, useState } from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Statistic, Tabs } from 'antd/lib';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import type { ProgressProps, TabsProps } from 'antd';
import MSLineChart from './MSLineChart';
import GRLineChart from './GRLineChart';
import SPChart from './SPChart';

const { Content } = Layout;
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const Overview = () => {
  const initialItems = [
    { label: 'Main', key: '1' },
    { label: 'Table 2', key: '2' },
    {
      label: 'Table 3',
      key: '3',
      closable: false,
    },
  ];

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
      <Layout style={{ marginLeft: 220 }}>
        <Tabs
          style={{ margin: '10px 0 0 10px' }}
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
        />
        <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Overview</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={24}>
              <Col span={12}>
                <Card title="Revenue" bordered={false}>
                <Statistic
                    value={"11.2m"}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<ArrowUpOutlined />}
                    suffix="SGD"
                />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Cost" bordered={false}>
                <Statistic
                    value={"9.27m"}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="SGD"
                />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={24}>
              <Col span={12}>
                <Card title="Growth Rate of Revenue" bordered={false}>
                  <GRLineChart />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Market Share" bordered={false}>
                <MSLineChart />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={24}>
              <Col span={24}>
                <Card title="Sales Process" bordered={false}>
                  <SPChart />
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default Overview;
