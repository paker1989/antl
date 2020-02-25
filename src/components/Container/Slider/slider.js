import React, { useState } from "react";
import {
  Slider,
  Card,
  Icon,
  Divider,
  Col,
  Row,
  InputNumber,
  message
} from "antd";

import "./slider.less";

export default () => {
  const [inputVal, setInputVal] = useState(40);
  return (
    <div className="demo-slider">
      <h1 className="demo-title">Popover (subclass of Tooltip)</h1>
      <div className="demo-wrapper">
        <Card
          style={{ width: 400 }}
          actions={[
            <Icon type="edit" />,
            <Icon type="wechat" />,
            <Icon type="delete" />
          ]}
        >
          <div>
            <Slider defaultValue={30} />
            <Slider range defaultValue={[10, 40]} />
            <Slider disabled range defaultValue={[10, 40]} />
            <Divider orientation="left" style={{ fontSize: 12 }}>
              基本用法
            </Divider>
            <Card.Meta
              description={`基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。`}
            />
          </div>
        </Card>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">带数字框</h1>
        <Row gutter={20} style={{ width: 600 }}>
          <Col span={16}>
            <div className="with-icon">
              <Icon type="frown-o" />
              <Slider
                value={inputVal}
                onChange={val => setInputVal(val)}
                tooltipVisible
                tooltipPlacement="bottom"
                onAfterChange={val => {
                  message.info(`Current value is ${val}`);
                }}
              />
              <Icon type="smile-o" />
            </div>
          </Col>
          <Col span={8}>
            <InputNumber
              value={inputVal}
              onChange={val => setInputVal(val)}
              min={0}
              max={100}
            />
          </Col>
        </Row>
        <Slider
          style={{
            display: "inline-block",
            height: 300,
            margin: "40px 0 0 40px"
          }}
          vertical
          defaultValue={30}
          tipFormatter={(val) => `当前温度: ${val}°C`}
          marks={{
            0: "0°C",
            37: "37°C",
            100: {
              style: {
                color: "#f50"
              },
              label: "100°C"
            }
          }}
        />
      </div>
    </div>
  );
};
