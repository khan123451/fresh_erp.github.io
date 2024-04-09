'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import ProgramTable from './ProgramTable';
import MembershipTable from './MembershipTable';

const { Content } = Layout;

const Membership = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Membership</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Programs" bordered={false}>
                <ProgramTable />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Member" bordered={false}>
                  <MembershipTable />
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default Membership;
