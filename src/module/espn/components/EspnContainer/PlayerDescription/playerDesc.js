import React from "react";
import { Row, Col } from "antd";
import PlayerStatistic from "./playerStatistic";

const statisticProps = {
  title: "2019-20 SEASON STATS",
  data: [
    { title: "PTS", value: "25.7", suffix: "11th" },
    { title: "REB", value: "7.9", suffix: "22nd" },
    { title: "AST", value: "10.6", suffix: "1st" },
    { title: "PER", value: "26.08", suffix: "7th" }
  ]
};
export default () => {
  return (
    <div className="player-desc">
      <Row>
        <Col xs={24} sm={12} lg={8}></Col>
        <Col xs={0} sm={12} lg={8}>
          player info
        </Col>
        <Col xs={24} lg={8}>
          <PlayerStatistic {...statisticProps} />
        </Col>
      </Row>
    </div>
  );
};
