import React from "react";
import { Card } from "antd";
import "./roster.less";

export default () => {
  return (
    <Card
      title="Switch Player"
      actions={[
        <a href="https://www.espn.com/nba/team/roster/_/name/lal/los-angeles-lakers">
          Full roster
        </a>
      ]}
    ></Card>
  );
};
