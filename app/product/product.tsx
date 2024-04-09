'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Statistic, Pagination } from 'antd/lib';
import type { StatisticProps } from 'antd';
import CountUp from 'react-countup';

const { Content } = Layout;

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

const Product = () => {

  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Popularity" bordered={false}>
                  <Statistic style={{padding: "23px"}} title="Products" value={2893} formatter={formatter} />
                </Card>
              </Col>
              <Col span={16}>
                <Card title="Top Selling" bordered={false}>
                  <div>
                    Fresh Facial Cream 
                    <br />
                    $ 54.99
                    <br />
                    Moisture texture good for dry skin.
                    <br />
                    Dry Skin
                    <br />
                    Quality: 50ml
                  </div>
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Popularity" bordered={false}>
                  <Statistic style={{padding: "23px"}} title="Products" value={2698} formatter={formatter} />
                </Card>
              </Col>
              <Col span={16}>
                <Card title="2nd Selling" bordered={false}>
                    <div>
                    Vitamin Face Cream 
                    <br />
                    $ 65.99
                    <br />
                    Skin recover and skin wash.
                    <br />
                    Dry Skin
                    <br />
                    Quality: 50ml
                  </div>
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Popularity" bordered={false}>
                  <Statistic style={{padding: "23px"}} title="Products" value={2513} formatter={formatter} />
                </Card>
              </Col>
              <Col span={16}>
                <Card title="3rd Selling" bordered={false}>
                <div>
                    Fresh Gel Cream (New)
                    <br />
                    $ 40.99
                    <br />
                    24-Hour Hydration and Shine Control.
                    <br />
                    Oil Skin
                    <br />
                    Quality: 50ml
                  </div>
                </Card>
              </Col>
            </Row>
            <br />
            <Pagination defaultCurrent={1} total={50} />
          </div>
          </Content>
      </Layout>
  );
};

export default Product;
