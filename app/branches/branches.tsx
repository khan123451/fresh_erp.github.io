'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
import InventoryPieDiagram from './InventoryPieDiagram';
import SalePieDiagram from './SalePieDiagram';
import AreaDropDown from './AreaDropDown';
import StoreDropDown from './StoreDropDown';
import StoreManagement from './StoreManagement';

const { Content } = Layout;

const Branches = () => {
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Branches</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <b style={{marginLeft: "10px"}}>Location: </b>
            < AreaDropDown />
            <br />
            <b style={{marginLeft: "10px"}}>Store: </b>
            < StoreDropDown />
            <br />
            <br />
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Inventory" bordered={false}>
                  <InventoryPieDiagram />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Sale" bordered={false}>
                  <SalePieDiagram />
                </Card>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Store Management" bordered={false}>
                  <StoreManagement />
                </Card>
              </Col>
            </Row>
          </div>
          </Content>
      </Layout>
  );
};

export default Branches;
