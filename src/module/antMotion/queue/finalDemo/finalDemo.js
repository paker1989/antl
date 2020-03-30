import React, { useState } from "react";
import { Button } from "antd";
import QueueAnim from "rc-queue-anim";

import "./finalDemo.less";

export default () => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div className="demo-container">
      <p className="buttons" style={{ marginBottom: 20 }}>
        <Button type="primary" onClick={onClick}>
          Switch
        </Button>
      </p>
      <QueueAnim delay={300} className="demo-content" type={["left", "right"]}>
        {show
          ? [
              <div className="demo-thead" key="1"></div>,
              <div className="demo-tbody" key="2">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>,
              <div className="demo-anim" key="3">
                <QueueAnim component="ul" type="bottom" delay={200}>
                  <li key="item-1"></li>
                  <li key="item-2"></li>
                  <li key="item-3"></li>
                </QueueAnim>
              </div>,
              <div className="demo-tfooter" key="4"></div>
            ]
          : null}
      </QueueAnim>
    </div>
  );
};
