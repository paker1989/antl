import React, { useState } from "react";
import TweenOne from "rc-tween-one";
import Children from "rc-tween-one/lib/plugin/ChildrenPlugin";
import { Typography, InputNumber, Checkbox, Button, Tag } from "antd";

import "./statistic.less";

const { Title, Paragraph, Text } = Typography;
export default () => {
  TweenOne.plugins.push(Children);

  const [inputVal, setInputVal] = useState(1000);
  const [animation, setAnimation] = useState(null);
  const [formatMoney, setFormatMondey] = useState(false);
  return (
    <div className="demo-container">
      <div className="demo-container">
        <Title level={4}>数值变化</Title>
        <Paragraph>
          <Tag>ChildrenPlugin</Tag>
          <Text code>value, formatMoney, floatLength</Text>
        </Paragraph>
        <TweenOne
          animation={animation}
          style={{ fontSize: 56, marginBottom: 12 }}
        ></TweenOne>
        {/* <TweenOne
          animation={{
            Children: {
              value: inputVal || 1000,
              floatLength: 2,
              formatMoney,
            },
            duration: 3000
          }}
        /> */}
        <div className="statistic-container">
          <InputNumber
            defaultValue={inputVal}
            onChange={(val) => {
              setInputVal(val);
            }}
          />
          <Checkbox
            checked={formatMoney}
            onChange={(e) => {
              console.log(e.target.checked);
              setFormatMondey(e.target.checked);
            }}
          >
            to money
          </Checkbox>
          <Button
            type="primary"
            onClick={() => {
              setAnimation({
                Children: {
                  value: typeof inputVal === "number" ? inputVal : 1000,
                  floatLength: 2,
                  formatMoney,
                },
                duration: 1000,
              });
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};
