import React from "react";
import { Row, Col } from "antd";

import LatestStatus from "./latest";
import PreviousGame from "./PreviousGame/previousGame";
import InfoCard from "./infoCard";
import StatsTable from "./StatsTable/statsTable";
import LatestNews from "./LatestNews/latestNews";

import {
  dataSource as statsData,
  columns as statsColumn
} from "./StatsTable/stats.data";

import {
  dataSource as recentsGameData,
  columns as recentsGameColumns
} from "./StatsTable/recents.data";

import "./content.less";

const latestProps = {
  title: "Status",
  extra: { status: "warning", text: "Day-To-Day" },
  powerby: "Data Provided by Rotowire",
  timing: "4 days ago",
  content: `The NBA announced Wednesday the 2019-20 season has been suspended indefinitely after a player tested positive for COVID-19.`
};

const infoCardsProps = [
  { title: "PTS VS UTA", stat: "52" },
  { title: "REB VS UTA", stat: "11" },
  { title: "AST VS UTA", stat: "22" },
  { title: "+/- VS UTA", stat: "-1" }
];
export default () => {
  return (
    <div className="player-content">
      <LatestStatus {...latestProps} />
      <PreviousGame />
      <Row gutter={20} style={{ marginTop: 20 }}>
        {infoCardsProps.map((item, index) => (
          <Col key={`info-card-${index}`} xs={12} md={8} lg={6}>
            <InfoCard {...item} />
          </Col>
        ))}
      </Row>
      <StatsTable
        title="Stats"
        className="stats-table"
        dataSource={statsData}
        columns={statsColumn}
        extra={[<a href="https://nba.com">See All</a>]}
      />
      <StatsTable
        className="recent-games"
        title="Recent Games"
        dataSource={recentsGameData}
        columns={recentsGameColumns}
        extra={[<a href="https://nba.com">See All</a>]}
      />
      <LatestNews />
    </div>
  );
};
