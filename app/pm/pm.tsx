'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import AreaDropDown from './AreaDropDown';
import ProjectDropDown from './ProjectDropDown';
import PMChart from './PMChart';

const { Content } = Layout;

const PM = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Project Management</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <b style={{marginLeft: "10px"}}>Location: </b>
            < AreaDropDown />
            <br />
            <b style={{marginLeft: "10px"}}>Project: </b>
            < ProjectDropDown />
            <br />
            <br />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Project Management" bordered={false}>
                  <PMChart />
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default PM;
