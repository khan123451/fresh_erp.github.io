'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Statistic, Row, Col } from 'antd/lib';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import PieDiagram from './PieDiagram'
import EmployeeTable from './EmployeeTable'
const { Content } = Layout;

const CRM = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>CRM</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
          <Row gutter={24}>
              <Col span={12}>
                <Card title="" bordered={false} style={{"position": "absolute"}}>
                  <PieDiagram />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Daily Revenue" bordered={false}>
                  <Statistic
                      value={"11.2m"}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="SGD"
                  />
                  <h3>Growth: 0.21m SGD</h3>
                </Card>
                <br />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
              </Col>
              <Col span={12}>
                <Card title="Daily Cost" bordered={false}>
                  <Statistic
                      value={"7.8m"}
                      precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      prefix={<ArrowDownOutlined />}
                      suffix="SGD"
                  />
                  <h3>Growth: -0.01m SGD</h3>
                </Card>
                <br />
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={12}>
              </Col>
              <Col span={12}>
                <Card title="Retail" bordered={false}>
                  <Statistic
                      value={"21"}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="Shops"
                  />
                  <h3>Growth: 1</h3>
                </Card>
                <br />
              </Col>
            </Row>
            <Card title="Employee" bordered={false}>
              <EmployeeTable />
            </Card>
          </div>
          </Content>
      </Layout>
  );
};

export default CRM;
