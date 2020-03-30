import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import NavSource from "../../assets/navSource";
import { getFullPath } from "../../helper/routeHelper";

import "./container.less";

const { Content } = Layout;

export default ({ match }) => {
  const prefix = match.url.replace("/", "");
  return (
    <Content className="app-content">
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          {NavSource.map(item => {
            // console.log(getFullPath(item.link));
            return (
              <Route
                key={item.title}
                path={getFullPath(prefix, item.link)}
                component={item.source}
              />
            );
          })}
          <Redirect from="*" to="/comp/menu" />
        </Switch>
      </Suspense>
    </Content>
  );
};
