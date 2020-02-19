import React from "react";
import { Layout, Menu } from "antd";
import "./App.less";
import SubMenu from "antd/lib/menu/SubMenu";

const {} = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  // const [collapsed, setCollapsed] = useState(false);

  // const onCollapse = changeStatus => {
  //   setCollapsed(changeStatus);
  // };

  return (
    <Layout style={{ minHeight: "900px" }}>
      <Header className="app-header"></Header> {/* to customize later */}
      <Layout style={{ position: "relative", height: "100%" }}>
        <Sider
          className="app-sider"
          width={256}
          collapsedWidth="80"
          collapsible
          defaultCollapsed={false}
          breakpoint="lg"
          theme="light"
        >
          <Menu mode="inline" defaultOpenKeys={["comp"]}>
            <SubMenu title="组件" key="comp">
              <Menu.ItemGroup key="g1" title="导航">
                <Menu.Item key="comp-menu">Menu 导航菜单</Menu.Item>
                {/* <Menu.Item key="2">Option 2</Menu.Item> */}
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Content></Content>
      </Layout>
    </Layout>
  );
}

export default App;
