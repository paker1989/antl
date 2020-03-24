import React from "react";
import { Layout, Typography, Row, Col } from "antd";

import SideNav from "../../components/SideNav/sideNav";
import NavData from "../../assets/navData";
import "./index.less";

const { Header, Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
    <Layout className="container">
      <Header className="header">
        <Row>
          <Col
            style={{ textAlign: "center" }}
            sm={24}
            md={{ span: 4 }}
          >
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
        <SideNav navData={NavData} />
        <Content style={{ height: "100vh" }}></Content>
      </Layout>
    </Layout>
  );
};
