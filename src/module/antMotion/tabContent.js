import React from "react";
import { Layout } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";

import SideNav from "../../components/SideNav";

import NavData from "../../assets/navData.animate";
import NavSource from "../../assets/navSource.animate";

import { getFullAnimatePath } from "../../helper/routeHelper";

const { Content } = Layout;

export default ({ tabKey }) => {
  return (
    <Layout>
      <SideNav
        navData={NavData[tabKey]}
        // defaultOpenKeys={["组件"]}
        // defaultSelectedKeys={["Menu"]}
      />
      <Content>
        <Switch>
          {NavSource[tabKey].map(item => {
            return (
              <Route
                key={`route-${tabKey}`}
                path={getFullAnimatePath(tabKey, item.link)}
                component={item.source}
              />
            );
          })}
          <Redirect
            from="*"
            to={`/animate/${tabKey}/${NavSource[0][0].link}`}
          />
        </Switch>
      </Content>
    </Layout>
  );
};
