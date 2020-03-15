import React from "react";
import Roster from "./Roster/roster";
import QuickLink from "./quickLink";
import "./sider.less";

export default () => {
  return (
    <div className="player-sider">
      <Roster />
      <QuickLink
        title="Lakers Quick Links"
        data={[
          { icon: "fund", title: "Stats" },
          { icon: "schedule", title: "Schedule" },
          { icon: "radar-chart", title: "Depth Chart" }
        ]}
      />
      <QuickLink
        title="NBA Quick Links"
        data={[
          { icon: "credit-card", title: "Scores" },
          { icon: "trophy", title: "Standings" },
          { icon: "schedule", title: "Schedule" }
        ]}
      />
    </div>
  );
};
