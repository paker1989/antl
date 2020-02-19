
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;



function App() {
  return (
    <Layout className="custom-layout">
      <Sider className="custom-sider">Sider</Sider>
      <Layout>
        <Header className="custom-header">Header</Header>
        <Content className="custom-content">Content</Content>
        <Footer className="custom-footer">Power by XU Bin.</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
