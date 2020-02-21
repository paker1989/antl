import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, } from 'react-router-dom';
import SideNav from './components/SideNav/sideNav';
import Container from './components/Container/container';

import "./App.less";

const { Header } = Layout;

function App() {
  // const [collapsed, setCollapsed] = useState(false);

  // const onCollapse = changeStatus => {
  //   setCollapsed(changeStatus);
  // };

  return (
    <Router basename="/">
      <Layout style={{ minHeight: "900px" }}>
        <Header className="app-header"></Header> {/* to customize later */}
        <Layout style={{ position: "relative", height: "100%" }}>
          <SideNav />
          <Container />
        </Layout>
      </Layout>
    </Router>

  );
}

export default App;
