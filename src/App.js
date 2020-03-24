import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import SideNav from "./components/SideNav/sideNav";
import Container from "./components/Container/container";
import Espn from './module/espn/espn';
import AntMotion from './module/antMotion';
import NavData from './assets/navData';


import "./App.less";

const { Header } = Layout;

function App() {
  // const [collapsed, setCollapsed] = useState(false);

  // const onCollapse = changeStatus => {
  //   setCollapsed(changeStatus);
  // };

  return (
    <Router basename="/">
      <Switch>
        <Route
          path="/comp"
          render={() => (
            <Layout style={{ minHeight: "900px" }}>
              <Header className="app-header"></Header>
              {/* to customize later */}
              <Layout style={{ position: "relative", height: "100%" }}>
                <SideNav navData={NavData} defaultOpenKeys={["组件"]} defaultSelectedKeys={["Menu"]}/>
                <Container />
              </Layout>
            </Layout>
          )}
        />
        <Route path="/espn" component={Espn}/>
        <Route path="/animate" component={AntMotion}/>
        <Redirect from="*" to="/espn" />
      </Switch>
    </Router>
  );
}

export default App;
