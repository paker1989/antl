import React, { Fragment } from "react";
import { Typography, Row, Col } from "antd";

import UploadBasic from "./upload.basic";
import UploadAvatar from "./upload.avatar";
import UploadFullControl from "./upload.fullcontrol";
import UploadPreview from "./upload.onPreview";
import UploadManual from "./upload.manual";
import UploadTransformFile from "./upload.transformfile";

import "./upload.less";

const { Title } = Typography;

export default () => {
  return (
    <Fragment>
      <Title level={3}>Upload 上传</Title>
      <Row gutter={40}>
        <Col xs={8} lg={12}>
          <UploadBasic />
        </Col>
        <Col xs={8} lg={12}>
          <UploadAvatar />
        </Col>
      </Row>
      <Row gutter={40} style={{ marginTop: 30 }}>
        <Col xs={6} lg={8}>
          <UploadFullControl />
        </Col>
        <Col xs={6} lg={8}>
          <UploadPreview />
        </Col>
        <Col xs={6} lg={8}>
          <UploadManual />
        </Col>
      </Row>
      <Row gutter={40} style={{ marginTop: 30 }}>
        <Col xs={6} lg={8}>
          <UploadTransformFile />
        </Col>
      </Row>
    </Fragment>
  );
};
