import React from "react";
import { Parallax, OverPack } from "rc-scroll-anim";
import { Typography, Tag } from "antd";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";

import "./scroll.less";

const { Title, Paragraph, Text } = Typography;
export default () => {
  return (
    <div className="demo-container scroll">
      <Title level={4}>Parallax</Title>
      <Paragraph>
        <Tag>animation</Tag>
        <Tag>style</Tag>
      </Paragraph>
      <Paragraph>
        <Text code>animation</Text>定义动画, 一般来说<Text code>style</Text>
        定义初始状态
      </Paragraph>
      <div className="demo-container basic">
        <Parallax
          className="code-box-shape"
          animation={{ x: 0 }}
          style={{
            transform: "translateX(-100px)"
          }}
        />
        <Parallax
          className="code-box-shape"
          animation={{ scale: 1.5 }}
          style={{ transform: "scale(0)" }}
        />
        <Parallax className="code-box-shape" animation={{ rotate: "360deg" }} />
      </div>
      <div className="demo-container">
        <Paragraph>
          自定义 playScale，在屏幕中间开始播放，到 80％ 结束动画。
        </Paragraph>
        <Parallax
          className="code-box-shape"
          animation={{ opacity: 1, x: 0 }}
          style={{
            opacity: 0,
            transform: "translateX(-100px)"
          }}
        />
      </div>
      <div className="demo-container">
        <Paragraph>可配置多个动画，然后再配合 playScale 完成滚动动画</Paragraph>
        <Parallax
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.2] },
            { y: 100, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
      </div>
      <div className="demo-container">
        <Paragraph>
          设置了在屏幕下方 50％ 时开始播放动画，子级可支持 rc-queue-anim
          rc-animate rc-tween-one。
        </Paragraph>
        <Paragraph>
          <Tag>OverPack</Tag>
          <Tag>QueueAnim:leaveReverse</Tag>
          {/* <Tag>style</Tag> */}
        </Paragraph>
        <OverPack style={{ overflow: "hidden", height: 200 }} className="over-pack">
          <TweenOne
            key="0"
            animation={{ opacity: 1 }}
            className="code-box-shape indep"
            style={{ opacity: 0, marginBottom: 10 }}
          />
          <QueueAnim
            className="queue-container"
            key="queue"
            // leaveReverse
            type={['top', 'right']}
            style={{
              float: "left",
              position: "relative",
              left: "50%",
              marginLeft: -165
            }}
          >
            <div key="a" className="code-box-shape queue-anim-demo" />
            <div key="b" className="code-box-shape queue-anim-demo" />
            <div key="c" className="code-box-shape queue-anim-demo" />
            <div key="d" className="code-box-shape queue-anim-demo" />
            <div key="e" className="code-box-shape queue-anim-demo" />
            <div key="f" className="code-box-shape queue-anim-demo" />
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
};
