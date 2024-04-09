'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import EmployeeTable from './EmployeeTable';
import DelSchedule from './DelSchedule';
import SaleRev from './SaleRev';
import QuaSale from './QuaSale';

const { Content } = Layout;

const Sales = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Sales</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Sales Revenue" bordered={false}>
                  <SaleRev />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Quarterty Sale" bordered={false}>
                  <QuaSale />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Delivery Schedule" bordered={false}>
                  <DelSchedule />
                </Card>
              </Col>
            </Row>
            <br />
            <Card title="Sales Data" bordered={false}>
              <EmployeeTable />
            </Card>
          </div>
          </Content>
      </Layout>
  );
};

export default Sales;
