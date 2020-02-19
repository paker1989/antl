
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function App() {

  const overlay = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          General
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          Layout
      </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="custom-layout">
      <Header>
        <div className="logo"></div>
        <Menu mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
          theme="dark">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb separator=">" style={{ margin: '16px 40px'}}>
          <Breadcrumb.Item>
            <Icon type="home" />
            Home
            </Breadcrumb.Item>
          <Breadcrumb.Item overlay={overlay}>Application center</Breadcrumb.Item>
          <Breadcrumb.Item>Application List</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content-main">
          content
         </div>
      </Content>
    </Layout>
  );
}

export default App;
