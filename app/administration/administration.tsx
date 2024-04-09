'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import AdminChart from './AdminChart';

const { Content } = Layout;

const Administration = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Administration</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={48}>
              <Col span={48} style={{width:"100%"}}>
                <Card title="Administration" bordered={false}>
                  <AdminChart />
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default Administration;
