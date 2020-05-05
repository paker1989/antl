import React, { useState } from "react";
import Texty from "rc-texty";
import { Button, Typography, Row, Col, Tag } from "antd";

import Custom from "./custom";
import FinalDemo from "./finalDemo";
import FinalPresentation from "./finalPresentation";

import "./text.less";

const { Title, Paragraph, Text } = Typography;

export default () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const getEnter = e => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
          scale: 3
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0
        };
      case 3:
        return {
          y: 60,
          opacity: 0
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: "set"
            },
            { scale: 1.2, opacity: 1, duration: 500 },
            { scale: 0.9, duration: 400 },
            { scale: 1.05, duration: 400 },
            { scale: 1, duration: 500 },
            { scale: 1, opacity: 1, duration: 100 }
          ],
          leave: {
            opacity: 0,
            scale: 0
          }
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0
        };
      default:
        return {
          opacity: 0
        };
    }
  };

  return (
    <div className="demo-container">
      <Title level={4}>TextyAnim文字动画</Title>
      <Paragraph>
        一个针对文字标题的进行进出场动画的组件，提供非富的动画效果，也可以随自已的需求来配置完成不同的效果
      </Paragraph>
      <Paragraph>
        别忘了import <Text code>rc-texty/assets/index.css</Text>
      </Paragraph>
      <Row>
        <Col md={24} lg={12}>
          <Title level={4}>基本效果</Title>
          <Paragraph>文字切换效果</Paragraph>
          <Button
            type="primary"
            style={{ margin: "20px 0" }}
            onClick={() => {
              setShow(!show);
            }}
          >
            Switch
          </Button>
          <Texty>{show && "Ant Motion"}</Texty>
        </Col>
        <Col md={24} lg={12}>
          <Title level={4}>自定义效果</Title>
          <Paragraph>
            <Tag>enter</Tag>
            <Tag>leave</Tag>
          </Paragraph>
          <Button
            type="primary"
            style={{ margin: "20px 0" }}
            onClick={() => {
              setShow2(!show2);
            }}
          >
            Switch
          </Button>
          <Texty enter={getEnter}>{show2 && "Ant Motion"}</Texty>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Custom />
        </Col>
        <Col span={12}>
          <FinalDemo />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Paragraph>
            <Tag>getSplit</Tag>
            <Tag>interval</Tag>
            <Tag>Texty: component=TweenOne</Tag>
            <Tag>Texty: componentProps=animationProps</Tag>
          </Paragraph>
          <FinalPresentation />
        </Col>
      </Row>
    </div>
  );
};
