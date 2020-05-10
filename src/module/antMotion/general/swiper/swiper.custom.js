import React, { useState, useRef } from "react";
import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import { Button, Icon } from "antd";
import { TweenOneGroup } from "rc-tween-one";

const Element = BannerAnim.Element;

const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, " +
    "Hong Kong and Southeast Asia known as motorcycles [2], " +
    "is a driven by the engine, " +
    "operated by a hand or two directions three-wheeled vehicles, is a means of transport. " +
    "In some military or police applications, will add a side compartment and a secondary wheel, " +
    "become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.",
  title: "Motorcycle",
};

let dataArray = [
  {
    pic: "https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png",
    map: "https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png",
    color: "#FFF43D",
    background: "#F6B429",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png",
    map: "https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png",
    color: "#FF4058",
    background: "#FC1E4F",
  },
  {
    pic: "https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png",
    map: "https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png",
    color: "#9FDA7F",
    background: "#64D487",
  },
];

dataArray = dataArray.map((item) => ({ ...item, ...textData }));

export default () => {
  const [currentInt, setCurrentInt] = useState(0);
  const [anim, setAnim] = useState(
    { translateX: [0, -300], opacity: [1, 0] },
    { translateX: [0, 300], opacity: [1, 0] }
  );
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const getDelay = ({ index }) => {
    return 200 + index * 200;
  };

  const getDuration = (e) => {
    console.log(e);
    if (e.key === "map") {
      return 800;
    }
    return 1000;
  };

  const goNext = () => {
    setAnim([
      { translateX: [0, 300], opacity: [1, 0] },
      { translateX: [0, -300], opacity: [1, 0] },
    ]);
    imgRef.current.next();
    textRef.current.next();
    setCurrentInt(currentInt + 1);
  };

  const goPrev = () => {
    setAnim([
      { translateX: [0, -300], opacity: [1, 0], duration: 2000 },
      { translateX: [0, 300], opacity: [1, 0] },
    ]);
    imgRef.current.prev();
    textRef.current.prev();
    setCurrentInt(currentInt - 1);
  };

  const ImgChildren = dataArray.map((item, i) => {
    return (
      <Element
        key={`img-elem-${i}`}
        style={{ background: item.color, height: "100%" }}
        leaveChildHide
      >
        <QueueAnim
          type="left"
          className="swiper-image-queue"
          key={`queue-image-${i}`}
          ease={["easeOutCubic", "easeInQuad"]}
          delay={getDelay}
          animConfig={anim}
          duration={getDuration}
        >
          <img src={item.pic} key="pic" className="pic" />
          <img src={item.map} key="map" className="map" />
        </QueueAnim>
      </Element>
    );
  });

  const TextChildren = dataArray.map((item, i) => {
    return (
      <Element key={`text-elem-${i}`} style={{ height: "100%" }}>
        <QueueAnim
          type="bottom"
          className="switch-text-queue"
          key={`queue-text-${i}`}
          delay={[800, 1200, 1500]}
          duration={1000}
          // delay={getDelay}
          // animConfig={anim}
          // duration={getDuration}
        >
          <h1 key="h1">{item.title}</h1>
          <em key="em" style={{ background: item.background }} />
          <p key="p">{item.content}</p>
        </QueueAnim>
      </Element>
    );
  });

  return (
    <div
      className="custom-banner"
      style={{ background: dataArray[currentInt].background }}
    >
      <div className="custom-banner-container">
        <BannerAnim
          sync
          prefixCls="content custom-img-banner"
          arrow={false}
          thumb={false}
          ref={imgRef}
          duration={1000}
          ease="easeInOutExpo"
          type="across"
        >
          {ImgChildren}
        </BannerAnim>
        <BannerAnim
          sync
          prefixCls="content custom-text-banner"
          arrow={false}
          thumb={false}
          ref={textRef}
          duration={1000}
          ease="easeInOutExpo"
          type="across"
        >
          {TextChildren}
        </BannerAnim>
        <TweenOneGroup
          className="arrow"
          enter={{ opacity: 0, type: "from" }}
          leave={{ opacity: 0 }}
        >
          {currentInt > 0 && <Icon type="left" key="left" onClick={goPrev} />}
          {currentInt < dataArray.length - 1 && (
            <Icon key="right" type="right" onClick={goNext} />
          )}
        </TweenOneGroup>
      </div>
    </div>
  );
};
