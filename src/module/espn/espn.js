import React from "react";
import { Layout } from "antd";
import EspnHeader from "../espn/components/EspnHeader/espnHeader";
import EspnContainer from "../espn/components/EspnContainer/espnContainer";

import './espn.less';

const { Header, Content } = Layout;

export default () => {
  return (
    <Layout>
      <Header>
        <EspnHeader />
      </Header>
      <Content>
        <EspnContainer />
      </Content>
    </Layout>
  );
};
