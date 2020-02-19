import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./App.less";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const overlay = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          General
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Layout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="custom-layout">
      <Header>
        <div className="logo"></div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
          theme="dark"
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={280} style={{ background: "#fff" }}>
          <Menu mode="inline">
            <SubMenu title="SubMenu">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb separator=">" style={{ margin: "16px 40px" }}>
            <Breadcrumb.Item>
              <Icon type="home" />
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={overlay}>
              Application center
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application List</Breadcrumb.Item>
          </Breadcrumb>
          <div className="content-main">content</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
