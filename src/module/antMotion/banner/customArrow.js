import { Tag, Typography } from "antd";
import BannerAnim, { Arrow, Element, Thumb } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import React, { useState } from "react";
import "./customArrow.less";

// import Paragraph from "antd/lib/skeleton/Paragraph";
const { Paragraph, Title, Text } = Typography;
const { BgElement } = Element;

const data = [
  {
    bgImg: "https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg",
    mainTitle: "Ant Motion Banner",
    subTitle: "The fast way to use animation in react",
    animProps: [
      {
        x: 50,
        opacity: 0,
        type: "from"
      },
      {
        x: 50,
        opacity: 0,
        type: "from",
        delay: 200
      }
    ]
  },
  {
    bgImg: "https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg",
    mainTitle: "Ant Motion Banner2",
    subTitle: "The fast way to use animation in react",
    animProps: [
      {
        x: 50,
        opacity: 0,
        type: "from"
      },
      {
        y: 30,
        opacity: 0,
        type: "from",
        delay: 200
      }
    ]
  }
];

export default () => {
  const [prevEnter, setPrevEnter] = useState(false);
  const [nextEnter, setNextEnter] = useState(false);
  const [thumbEnter, setThumbEnter] = useState(false);

  return (
    <div className="demo-container">
      <Title level={4}>自定义左右箭头与缩略图</Title>
      <Paragraph>可定制自已所示的箭头。</Paragraph>
      <Paragraph>
        <Tag>rc-banner-anim.Arrow</Tag>
        <Tag>rc-banner-anim.Thumb</Tag>
        <Text code>Arrow/Thumb.component = TweenOne</Text>
      </Paragraph>
      <BannerAnim
        prefixCls="arrow-banner-anim"
        onMouseEnter={() => setThumbEnter(true)}
        onMouseLeave={() => setThumbEnter(false)}
      >
        {data.map((item, index) => (
          <Element key={`element-${index}`} prefixCls="arrow-element-anim">
            <BgElement
              style={{ backgroundImage: `url('${item.bgImg}')` }}
              key={`bg-${index}`}
              className="bg"
            />
            <TweenOne className="main-title" animation={item.animProps[0]}>
              {item.mainTitle}
            </TweenOne>
            <TweenOne className="sub-title" animation={item.animProps[1]}>
              {item.subTitle}
            </TweenOne>
          </Element>
        ))}
        <Arrow
          arrowType="prev"
          prefixCls="custom-arrow"
          component={TweenOne}
          key="arrow-prev"
          onMouseEnter={() => setPrevEnter(true)}
          onMouseLeave={() => setPrevEnter(false)}
          componentProps={{
            animation: {
              left: prevEnter ? 0 : -120,
              ease: 'easeInOutQuint' //easeOutQuart, easeInOutQuint
            }
          }}
        >
          <div className="arrow-wrapper">
            <div className="arrow-icon"></div>
            <div
              className="img-wrapper"
              style={{ backgroundImage: `url('${data[0].bgImg}')` }}
            ></div>
          </div>
        </Arrow>
        <Arrow
          arrowType="next"
          prefixCls="custom-arrow"
          component={TweenOne}
          key="arrow-next"
          onMouseEnter={() => setNextEnter(true)}
          onMouseLeave={() => setNextEnter(false)}
          componentProps={{
            animation: {
              right: nextEnter ? 0 : -120
            }
          }}
        >
          <div className="arrow-wrapper">
            <div className="arrow-icon"></div>
            <div
              className="img-wrapper"
              style={{ backgroundImage: `url('${data[1].bgImg}')` }}
            ></div>
          </div>
        </Arrow>
        <Thumb
          prefixCls="arrow-thumb"
          key="arrow-thumb"
          component={TweenOne}
          animation={{ bottom: thumbEnter ? 0 : -40 }}
        >
          {data.map((item, key) => (
            <span
              className="thumb-item"
              key={`thumb-${key}`}
              style={{ backgroundImage: `url('${item.bgImg}')` }}
            ></span>
          ))}
        </Thumb>
      </BannerAnim>
    </div>
  );
};
