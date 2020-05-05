import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import Texty from "rc-texty";
import { Typography } from "antd";

import "./basic.less";

const { BgElement } = Element;
const { Title, Paragraph } = Typography;

export default () => {
  return (
    <div className="demo-container">
      <Title level={4}>BannerAnimBanner动画</Title>
      <Paragraph>通过简单的配置, 就能让你的 banner 动起来。 </Paragraph>
      <BannerAnim prefixCls="banner-user">
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#364D79",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#64CBCC",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Ant Motion Banner
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            The Fast Way Use Animation In React
          </TweenOne>
        </Element>
        <Element key="e4" prefixCls="banner-user-elem">
          <BgElement
            key="bg4"
            className="bg"
            style={{ background: "#64cbca" }}
          ></BgElement>
          <Texty
            className="banner-user-title"
            component={TweenOne}
            componentProps={{ y: -40, opacity: 0, type: "from" }}
          >
            Ant Motion
          </Texty>
          <TweenOne
            className="banner-user-text"
            animation={{ x: -40, opacity: 0, type: "from" }}
          >
            Test on Mai
          </TweenOne>
        </Element>
      </BannerAnim>
    </div>
  );
};
