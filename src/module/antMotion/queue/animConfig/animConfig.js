import React, { useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Typography, Button } from "antd";

import "./animConfig.less";
// import Paragraph from 'antd/lib/skeleton/Paragraph';

const { Title, Paragraph, Text } = Typography;

export default () => {
  const [show, setShow] = useState(false);
  // const [items, setItems] = useState([
  //   <li key="0"></li>,
  //   <li key="1"></li>,
  //   <li key="2"></li>
  // ]);
  return (
    <div className="demo-container">
      <Title level={4}>自定义动画进出场</Title>
      <Paragraph>{/* <Tag>type</Tag>
        <Tag>ease</Tag> */}</Paragraph>
      <Paragraph>
        通过 <Text code>animConfig</Text> 来自定义动画进出场。
      </Paragraph>
      <Paragraph>
        
      </Paragraph>
      <Button
        type="primary"
        style={{ marginBottom: 30 }}
        onClick={() => {
          setShow(!show);
        }}
      >
        Switch
      </Button>
      <QueueAnim
        delay={300}
        className="demo-content"
        animConfig={[
          { opacity: [1, 0], translateX: [0, 50] },
          { opacity: [1, 0], scaleX: [1, 0.3] }
        ]}
      >
        {show
          ? [
              <div className="demo-thead" key="1"></div>,
              <div className="demo-tbody" key="2">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            ]
          : null}
      </QueueAnim>
    </div>
  );
};
