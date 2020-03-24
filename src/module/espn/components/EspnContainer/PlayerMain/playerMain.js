import React from "react";
import { Row, Col } from "antd";

import Sider from "./Sider/sider";
import Content from "./Content/content";
import RightSider from "./RightSider/rightSider";

import "./playerMain.less";

export default () => {
  return (
    <Row className="player-main" gutter={20}>
      <Col sm={0} md={{ span: 0, offset: 0 }} lg={{ span: 4, offset: 2 }}>
        <Sider />
      </Col>
      <Col
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 12, offset: 0 }}
      >
        <Content />
      </Col>
      <Col sm={0} md={0} lg={{ span: 5 }}>
        <RightSider />
      </Col>
    </Row>
  );
};
