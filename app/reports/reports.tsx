'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Statistic } from 'antd/lib';
import PieDiagram from './PieDiagram';
import DateSchedule from './DateSchedule';
import NBLineChart from './NBLineChart';
import DayLineChart from './DayLineChart';
import { LikeOutlined } from '@ant-design/icons';
import DDLineChart from './DDLineChart';

const { Content } = Layout;

const Reports = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Sold Items" bordered={false}>
                  <PieDiagram />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Date Picker" bordered={false}>
                  <DateSchedule />
                </Card>
              </Col>
              <Col span={8}>
                <Card title="New Buyer" bordered={false}>
                  <NBLineChart />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Sale Tracking" bordered={false}>
                  <DayLineChart />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Daily Deals" bordered={false} >
                  <DDLineChart />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Liked Products" bordered={false}>
                  <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                  <b>+19 New Likes</b>
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default Reports;
