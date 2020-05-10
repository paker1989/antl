import QueueAnim from "rc-queue-anim";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import React, { useState } from "react";
import "./switchImage.custom2.less";


const getDelay = ({ index }) => {
  const i = index + (dataArray.length % 4);
  const delay = (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  return delay;
};

const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, Hong Kong and Southeast" +
    " Asia known as motorcycles.",
  title: "Motorcycle",
};

let dataArray = [
  { image: "https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png" },
  { image: "https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png" },
];

const finalDataArray = dataArray.map((item) => ({ ...item, ...textData }));

export default () => {
  // let rows = Array(3).fill(0);
  const [picOpen, setPicOpen] = useState({});

  const togglePic = (e, i) => {
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    console.log(picOpen);
    setPicOpen({ ...picOpen });
  };

  const onTweenEnd = (i) => {
    if (typeof picOpen[i] === "boolean") {
      delete picOpen[i];
    }
    setPicOpen({ ...picOpen });
  };

  const offset = 20;
  const imgWidth = 110;
  const imgHeight = 76;

  console.log("render");
  return (
    <QueueAnim
      type="bottom"
      delay={getDelay}
      interval={0}
      className="switch-image-queue2"
    >
      {finalDataArray.map((item, i) => {
        const toTop = i >= 4 * (Math.floor(dataArray.length / 4) - 1);
        const left = (110 + offset) * (i % 4);
        const top = (76 + offset) * Math.floor(i / 4);
        const isOpen = picOpen[i];
        const isEntered = typeof picOpen[i] === "boolean";

        const isRight = i % 4 > 1;

        let containerAnimation = isOpen
          ? {
              width: "100%",
              height: imgHeight * 2 + offset,
              top: toTop ? top - (76 + offset) : top,
              left: 0,
            }
          : isEntered
          ? {
              width: imgWidth,
              height: imgHeight,
              onComplete: () => onTweenEnd(i),
              top,
              left,
              delay: 400,
            }
          : null;

        let imgAnimation = isOpen
          ? {
              width: imgWidth * 2 + offset + 10,
              height: imgHeight * 2 + offset,
              left: isRight ? '250px': 0,
            }
          : isEntered
          ? {
              delay: 400,
              width: imgWidth,
              height: imgHeight,
              left: 0,
            }
          : null;

        return (
          <TweenOne
            key={`container-${i}`}
            className="item-container"
            style={{ zIndex: isOpen ? 3 : isEntered ? 2 : 1, left, top }}
            animation={containerAnimation}
          >
            <TweenOne
              className="item-wrapper"
              style={{
                width: "100%",
                height: "100%",
                zIndex: isOpen ? 999 : isEntered ? 998 : "inherit",
              }}
              key={`image-${i}`}
              onClick={(e) => togglePic(e, i)}
              animation={imgAnimation}
            >
              <img src={item.image} key={`item-${i}`} alt={item.title} />
            </TweenOne>
            <TweenOneGroup
              enter={[
                {
                  opacity: 0,
                  duration: 0,
                  type: "from",
                  delay: 400,
                },
                {
                  ease: "easeOutCubic",
                  type: "from",
                  left: isRight ? "50%" : "0%",
                },
              ]}
              leave={{ ease: "easeInOutCubic", left: isRight ? "50%" : "0%" }}
              component=""
            >
              {isOpen && (
                <div
                  className="description-container"
                  key="1"
                  style={{ left: isRight ? 0 : "50%" }}
                >
                  <span className="title">{item.title}</span>
                  <span className="content">{item.content}</span>
                </div>
              )}
            </TweenOneGroup>
          </TweenOne>
        );
      })}
    </QueueAnim>
  );
};
