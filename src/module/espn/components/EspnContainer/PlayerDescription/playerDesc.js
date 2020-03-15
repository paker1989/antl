import React from "react";
import { Row, Col } from "antd";
import PlayerStatistic from "./playerStatistic";
import PlayerMeta from "./playerMeta";
import PlayerInfo from "./playerInfo";
import bgImage from "../../../assets/imgs/lakers-logo.png";
import avatar from "../../../assets/imgs/lbj-23-logo.png";

const statisticProps = {
  title: "2019-20 SEASON STATS",
  data: [
    { title: "PTS", value: "25.7", suffix: "11th" },
    { title: "REB", value: "7.9", suffix: "22nd" },
    { title: "AST", value: "10.6", suffix: "1st" },
    { title: "PER", value: "26.08", suffix: "7th" }
  ]
};

const playerInfoProps = {
  bgImage,
  userMeta: {
    firstName: "Lebron",
    lastName: "James",
    avatar,
    meta: {
      team: "Los Angeles Lakers",
      number: "#23",
      position: "Small Forward"
    }
  }
};

export default () => {
  return (
    <div className="player-desc">
      <Row className="player-desc-row">
        <Col sm={24} md={16} lg={10}>
          <PlayerMeta {...playerInfoProps} />
        </Col>
        <Col xs={0} sm={0} md={8} lg={6}>
          <PlayerInfo />
        </Col>
        <Col sm={24} lg={8}>
          <PlayerStatistic {...statisticProps} />
        </Col>
      </Row>
    </div>
  );
};
