import React, { useState, useEffect } from "react";
import TweenOne from "rc-tween-one";
import { Typography, Button } from "antd";

import "./basic.less";

const { Title } = Typography;

export default () => {
  const [paused, setPaused] = useState(false);
  const [reversed, setReversed] = useState(false);
  const [moment, setMoment] = useState(null);

  useEffect(() => {
    if (moment === 0) {
      setMoment(null);
    }
  }, [moment]);

  return (
    <div className="demo-container">
      <div className="demo-container">
        <Title level={4}>基本动画效果</Title>
        <TweenOne
          animation={{
            x: 60,
            scale: 0.5,
            rotate: 120,
            yoyo: true, // demo 演示需要
            repeat: -1, // demo 演示需要
            duration: 1000
          }}
          paused={false}
          //   style={{ transform: "translateX(-80px)" }}
          className="code-box-shape"
        />
      </div>
      <div className="demo-container">
        <Title level={4}>时间轴效果</Title>
        <TweenOne
          animation={[
            { left: "-40%" },
            { left: "40%" },
            { top: "60px" },
            { scale: 0.7 },
            { scale: 1 },
            { top: 0 },
            { left: "0%" }
            // { scale: 3, left: '-40%' },
            // { left: "40%", duration: 2000 }
          ]}
          paused={false}
          // repeat={-1}
          yoyo={false}
          style={{ transform: "scale(1)" }}
          className="code-box-shape"
        />
      </div>
      <div className="demo-container">
        <Title level={4}>变更动画参数</Title>
        <Button.Group>
          <Button
            onClick={() => {
              setPaused(false);
              setMoment(null);
            }}
          >
            Play
          </Button>
          <Button
            onClick={() => {
              setPaused(true);
              setMoment(null);
            }}
          >
            Pause
          </Button>
          <Button
            onClick={() => {
              setPaused(false);
              setReversed(true);
              setMoment(null);
            }}
          >
            Reverse
          </Button>
          <Button
            onClick={() => {
              setPaused(false);
              setReversed(false);
              setMoment(0);
            }}
          >
            Restart
          </Button>
        </Button.Group>
        <TweenOne
          animation={{
            duration: 1000,
            repeat: -1,
            x: 400,
            scale: 1,
            yoyo: true
          }}
          moment={moment}
          paused={paused}
          reverse={reversed}
          style={{ transform: "scale(.5)" }}
          className="code-box-shape"
        />
      </div>
    </div>
  );
};
