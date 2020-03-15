import React from "react";
import { Card, Statistic } from "antd";

export default ({ title, data }) => {
  return (
    <Card title={title} className="player-statistic" bordered>
      <div className="statistic-body">
        {data.map((item, index) => (
          <Statistic
            key={`statistic-${index}`}
            title={item.title}
            value={item.value}
            // className="statistic-item"
            formatter={value => (
              <div className="statistic-item-body">
                <span className="main">{value}</span>
                <span className="sub">{item.suffix}</span>
              </div>
            )}
          />
        ))}
      </div>
    </Card>
  );
};
