import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import { Typography, Tag } from "antd";

import "./basic.less";
// import Paragraph from "antd/lib/skeleton/Paragraph";
const { Paragraph, Title } = Typography;
const { BgElement } = Element;

export default () => {
  return (
    <div className="demo-container">
      <Title level={4}>自己尝试</Title>
      <Paragraph>
        <Tag>prefixCls</Tag>
        <Tag>Element</Tag>
        <Tag>BgElement</Tag>
        <Tag>Autoplay</Tag>
      </Paragraph>
      <BannerAnim prefixCls="custom-banner-anim" autoPlay>
        <Element key="0" prefixCls="custom-element-anim">
          <BgElement
            style={{ background: "#364D79" }}
            key="bg1"
            className="bg"
          />
          <TweenOne
            className="main-title"
            animation={{
              x: 50,
              opacity: 0,
              type: "from"
            }}
          >
            <span>Ant Motion Banner</span>
          </TweenOne>
          <TweenOne
            className="sub-title"
            animation={{
              x: 50,
              opacity: 0,
              type: "from",
              delay: 200
            }}
          >
            <span>The fast way to use animation in react</span>
          </TweenOne>
        </Element>
        <Element key="1" prefixCls="custom-element-anim">
          <BgElement
            style={{ background: "#64CBCC" }}
            key="bg2"
            className="bg"
          />
          <TweenOne
            className="main-title"
            animation={{
              y: 30,
              opacity: 0,
              type: "from"
            }}
          >
            Ant Motion Banner 2
          </TweenOne>
          <TweenOne
            className="sub-title"
            animation={{
              y: 30,
              opacity: 0,
              type: "from",
              delay: 200
            }}
          >
            The fast way to use animation in react
          </TweenOne>
        </Element>
      </BannerAnim>
    </div>
  );
};
