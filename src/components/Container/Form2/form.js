import React, { Fragment } from "react";
import { Row, Col } from "antd";
import CompleteRegister from "./form.complete";

import "./form.less";

export default () => {
  return (
    <Fragment>
      <Row gutter={40} justify="center" type="flex">
        <Col span={12}>
          <CompleteRegister />
        </Col>
      </Row>
    </Fragment>
  );
};
