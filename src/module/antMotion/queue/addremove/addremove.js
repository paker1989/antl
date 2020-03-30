import React, { useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Typography, Tag, Button } from "antd";

import "./addremove.less";
// import Paragraph from 'antd/lib/skeleton/Paragraph';

const { Title, Paragraph } = Typography;

export default () => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([
    <li key="0"></li>,
    <li key="1"></li>,
    <li key="2"></li>
  ]);
  return (
    <div className="demo-container">
      <Title level={4}>添加与删除</Title>
      <Paragraph>
        <Tag>type</Tag>
        <Tag>ease</Tag>
      </Paragraph>
      <div className="btn-group">
        <Button
          type="primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Switch
        </Button>
        <Button
          onClick={() => {
            // const key = items.length;
            const newItems = items.concat([]);
            newItems.push(<li key={Date.now()}></li>);
            setItems(newItems);
            setShow(true);
          }}
        >
          Add
        </Button>
      </div>

      <div className="demo-content">
        <div className="demo-thead" key="1"></div>
        <div className="demo-tbody" key="2">
          <QueueAnim delay={300} component="ul" type={["left", "right"]}>
            {show ? items : null}
          </QueueAnim>
        </div>
      </div>
      {/* <QueueAnim delay={300} className="demo-content" type={["top", "right"]}>
        {show
          ? [
              <div className="demo-thead" key="1"></div>,
              <div className="demo-tbody" key="2">
                <ul>{items}</ul>
              </div>
            ]
          : null}
      </QueueAnim> */}
    </div>
  );
};
