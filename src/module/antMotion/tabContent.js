import React, { Suspense } from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import SideNav from "../../components/SideNav/sideNav";

import NavData from "../../assets/navData.animate";
import NavSource from "../../assets/navSource.animate";

import { getFullPath } from "../../helper/routeHelper";

const { Content } = Layout;

export default ({ tabKey }) => {
  console.log(`/animate/${tabKey}/${NavSource[tabKey][0].link}`);
  return (
    <Layout className="tab-content">
      <SideNav navData={NavData[tabKey]} defaultOpenKeys={["范例"]} />
      <Content>
        <Suspense fallback={<div>Loading....</div>}>
          <Switch>
            {NavSource[tabKey].map(item => {
              return (
                <Route
                  key={`route-${tabKey}`}
                  path={getFullPath("animate", `${tabKey}/${item.link}`)}
                  component={item.source}
                />
              );
            })}
            {/* <Redirect
              from="*"
              to={`/animate/${tabKey}/${NavSource[tabKey][0].link}`}
            /> */}
          </Switch>
        </Suspense>
      </Content>
    </Layout>
  );
};
