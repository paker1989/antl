import React, { useState } from "react";
import Texty from "rc-texty";
import { Typography, Button, Row, Col, Select } from "antd";
// import Title from "antd/lib/skeleton/Title";
const { Title, Paragraph } = Typography;
const { Option } = Select;

export default () => {
  const defaultType = "left";
  const defaultMode = "smooth";

  const [show, setShow] = useState(false);
  const [type, setType] = useState(defaultType);
  const [mode, setMode] = useState(defaultMode);
  return (
    <div>
      <Title level={4}>自定义</Title>
      <Paragraph></Paragraph>
      <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => {
          setShow(!show);
        }}
      >
        Switch
      </Button>
      <Row>
        <Col span={12}>
          <span>Type:</span>
          <Select
            defaultValue={defaultType}
            style={{ width: 120, marginLeft: 20 }}
            onChange={val => {
              setType(val);
            }}
          >
            <Option value="left">Left</Option>
            <Option value="right">Right</Option>
            <Option value="top">top</Option>
            <Option value="alpha">alpha</Option>
            <Option value="scale">scale</Option>
            <Option value="scaleBig">scaleBig</Option>
            <Option value="scaleX">scaleX</Option>
          </Select>
        </Col>
        <Col span={12}>
          <span>mode:</span>
          <Select
            defaultValue={defaultMode}
            style={{ width: 120, marginLeft: 20 }}
            onChange={val => {
              setMode(val);
            }}
          >
            <Option value="smooth">smooth</Option>
            <Option value="random">random</Option>
            <Option value="reverse">reverse</Option>
            <Option value="sync">sync</Option>
          </Select>
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Texty type={type} mode={mode}>
          {show && "Ant Motion"}
        </Texty>
      </Row>
    </div>
  );
};
