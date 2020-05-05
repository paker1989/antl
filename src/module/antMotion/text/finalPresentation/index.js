import React, { useState } from "react";
import Texty from "rc-texty";
import TweenOne from "rc-tween-one";

import { Button } from "antd";

import "./index.less";

export default () => {
  const [show, setShow] = useState(true);

  const getEnter = e => {
    const t = {
      opacity: 0,
      scale: 0.8,
      y: "-100%"
    };
    if (e.index >= 2 && e.index <= 6) {
      return { ...t, y: "-30%", duration: 150 };
    }
    return t;
  };

  const getSplit = e => {
    const t = e.split(" ");
    const c = [];
    t.forEach((str, i) => {
      c.push(<span key={`${str}-${i}`}>{str}</span>);
      if (i < t.length - 1) {
        c.push(<span key={` -${i}`}> </span>);
      }
    });
    return c;
  };

  return (
    <div className="final-pres">
      <Button
        shape="circle"
        icon="reload"
        className="reload"
        onClick={() => {
          setShow(!show);
        }}
      />
      {show && (
        <div className="main-content">
          <div className="combined-shape">
            <div className="shape left">
              <TweenOne
                animation={[
                  {
                    x: 158,
                    duration: 600,
                    type: "from",
                    ease: "easeInOutQuint"
                  },
                  {
                    x: -158,
                    duration: 600,
                    delay: -150,
                    ease: "easeInOutQuart"
                  }
                ]}
              />
            </div>
            <div className="shape right">
              <TweenOne
                animation={[
                  {
                    x: -158,
                    duration: 600,
                    type: "from",
                    ease: "easeInOutQuint"
                  },
                  { x: 158, duration: 600, delay: -150, ease: "easeInOutQuart" }
                ]}
              />
            </div>
          </div>
          <Texty className="main-text" enter={getEnter} delay={600}>
            Ant Motion
          </Texty>
          <Texty
            className="sub-text"
            type="bottom"
            delay={1800}
            interval={30}
            split={getSplit}
          >
            Animation specification and components of Ant Design.
          </Texty>
          <TweenOne
            className="combined-bar"
            animation={{
              delay: 1200,
              width: 0,
              x: 158,
              type: "from",
              ease: "easeInOutExpo"
            }}
          />
        </div>
      )}
    </div>
  );
};
