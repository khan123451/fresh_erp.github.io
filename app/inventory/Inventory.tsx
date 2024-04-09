'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Statistic } from 'antd/lib';
import SearchBox from './SearchBox';
import InventoryTable from './InventoryTable';
import CountUp from 'react-countup';
import type { StatisticProps } from 'antd';

const { Content } = Layout;

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

const Inventory = () => {

  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Inventory</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <SearchBox />
            <br />
            <Row gutter={16}>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Categories" value={15} formatter={formatter} />
                </Card>
              </Col>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Total Products" value={868} precision={2} formatter={formatter} />
                </Card>
              </Col>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Revenue" value={25000} precision={2} formatter={formatter} />
                </Card>
              </Col>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Top Selling" value={5} precision={2} formatter={formatter} />
                </Card>
              </Col>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Cost" value={22500} precision={2} formatter={formatter} />
                </Card>
              </Col>
              <Col span={4}>
                <Card title="" bordered={false}>
                  <Statistic title="Low Stocks" value={12} precision={2} formatter={formatter} />
                </Card>
              </Col>
            </Row>
            <br />
            <InventoryTable />
          </div>
          </Content>
      </Layout>
  );
};

export default Inventory;
