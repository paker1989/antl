import React from "react";
import { Layout, Typography, Row, Col, Tabs } from "antd";

// import SideNav from "../../components/SideNav/sideNav";
// import NavData from "../../assets/navData";
import TabContent from "./tabContent";
import tabsProps from "../../assets/tabs.animate";

import "./index.less";

const { Header, Content } = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

export default () => {
  return (
    <Layout className="container">
      <Header className="header">
        <Row>
          <Col style={{ textAlign: "center" }} sm={24} md={{ span: 4 }}>
            <div className="header-logo">
              <img
                src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg"
                alt="logo"
              />
              <Title level={3}>Ant Motion</Title>
            </div>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content style={{ height: "100vh" }}>
          <Tabs defaultActiveKey="one" size="large" className="content-tabs">
            {tabsProps.map(item => (
              <TabPane tab={item.title} key={item.key}>
                <TabContent tabKey={item.key} />
              </TabPane>
            ))}
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};
