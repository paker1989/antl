import React, { useState, useMemo, useCallback } from "react";
import { Table, Button, Row, Col, Divider } from "antd";
import { TweenOneGroup } from "rc-tween-one";

import "./addDivList.less";

const TableContext = React.createContext(false);

const dataProps = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

export default () => {
  const [data, setData] = useState(dataProps);

  const handleSwitch = () => {
    data.unshift({
      key: Date.now(),
      name: Date.now(),
      age: 31,
      address: "Sidne No. 1 Lake Park",
    });

    data.pop();

    setData([...data]);
  };

  return (
    <Row>
      <Col offset={4} span={16}>
        <div className="demo-container">
          <Button type="primary" onClick={handleSwitch}>
            Switch
          </Button>
          <Divider />
          <TweenOneGroup
            className="item-container"
            enter={[
              { width: 0, opacity: 0, duration: 0 },
              { width: 150, opacity: 1, ease: "easeInOutCubic", },
            ]}
            leave={[{ ease: "easeInOutCubic", left: 50, opacity: 0 }]}
            exclusive
            appear={false}
          >
            {data.map((item, i) => {
              return (
                <div className="item-wrapper" key={item.key}>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                  <span>{item.address}</span>
                </div>
              );
            })}
          </TweenOneGroup>
        </div>
      </Col>
    </Row>
  );
};
