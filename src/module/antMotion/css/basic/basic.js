import React, { useState } from "react";
import Animate from "rc-animate";
import { Typography, Button, Tag } from "antd";

import "./basic.less";
// import Paragraph from 'antd/lib/skeleton/Paragraph';

const { Title, Paragraph, Text } = Typography;

const Div = ({ ...props }) => {
  const propsObj = { ...props };
  delete propsObj.show;
  return <div {...propsObj} className="code-box-shape"></div>;
};
export default () => {
  const [show, setShow] = useState(true);
  return (
    <div className="demo-container">
      <Title level={4}>Css样式动画</Title>
      <Paragraph>
        对单个元素根据状态进行动画显示隐藏，需结合 css
        或其它第三方动画类一起使用
      </Paragraph>
      <div className="demo-container">
        <Button
          type="primary"
          style={{ marginBottom: 40 }}
          onClick={() => {
            setShow(!show);
          }}
        >
          Switch
        </Button>
        <div className="demo-container">
          <Paragraph>
            <Tag>showProp</Tag>
            <Tag>transitionName</Tag>
          </Paragraph>
          <Animate showProp="show" transitionName="basic-fade">
            <Div show={show} className="code-box-shape"></Div>
          </Animate>
        </div>
        <div className="demo-container">
          <Title level={4}>删除子级</Title>
          <Paragraph>
            <Text>动画出场后将子级删除掉。</Text>
          </Paragraph>
          <Tag>No showProp</Tag>
          <Tag>component</Tag>
          <Animate transitionName="basic-fade" transitionAppear>
            {show ? <div key="1" className="code-box-shape"></div> : null}
          </Animate>
        </div>
      </div>
    </div>
  );
};
