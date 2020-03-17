import React from "react";
import { Card } from "antd";
import GameVs from "./gameVs";

import "../content.less";

const gameVsProps = {
  home: {
    team: "Lakers",
    link:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png&w=80&h=80&scale=crop&cquality=40&location=origin",
    stats: "49-14",
    score: "0"
  },
  away: {
    team: "Jazz",
    link:
      "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/utah.png&w=80&h=80&scale=crop&cquality=40&location=origin",
    stats: "41-23",
    score: "0"
  },
  status: (
    <span style={{ fontSize: 13, fontWeight: 600, lineHeight: '42px' }}>
      Postponed
    </span>
  )
};

export default () => {
  return (
    <Card
      className="previous-games"
      title="Previous Game"
      extra={[<a href="https://nba.com">Full Split</a>]}
    >
      <GameVs {...gameVsProps} />
    </Card>
  );
};
