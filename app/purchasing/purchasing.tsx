'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import PieDiagram from './PieDiagram';
import SearchBox from './SearchBox';
import InventoryTable from './InventoryTable';

const { Content } = Layout;

const Purchasing = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Purchasing</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <SearchBox />
            <br />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Product Popularity" bordered={false}>
                  <PieDiagram />
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

export default Purchasing;
