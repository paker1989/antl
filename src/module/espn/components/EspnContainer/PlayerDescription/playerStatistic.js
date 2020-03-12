import React from "react";
import { Card, Statistic } from "antd";

export default ({ title, data }) => {
  return (
    <Card title={title}>
      {data.map((item, index) => (
        <Statistic
          key={`statistic-${index}`}
          title={item.title}
          value={item.value}
          formatter={value => (
            <div className="static-meta">
              <span>{value}</span>
              <span>{item.suffix}</span>
            </div>
          )}
        />
      ))}
    </Card>
  );
};
