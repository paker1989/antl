import React from "react";
import { Row, Col, Avatar } from "antd";

import "../content.less";

export default ({ home, away, status }) => {
  return (
    <Row className="gameVs">
      <Col offset={2} span={8}>
        <Row type="flex" justify="center">
          <Col span={18}>
            <div className="vs-target">
              <div className="vs-target-text home">
                <span className="team">{home.team}</span>
                <span className="stats">{home.stats}</span>
              </div>
              <Avatar src={home.link} size="large" />
            </div>
          </Col>
          <Col span={6} className="center">
            <span className="score">{home.score}</span>
          </Col>
        </Row>
      </Col>
      <Col span={4} className="center">{status}</Col>
      <Col span={8}>
        <Row>
          <Col span={6} className="center">
            <span className="score">{away.score}</span>
          </Col>
          <Col span={18}>
            <div className="vs-target">
              <Avatar src={away.link} size="large" />
              <div className="vs-target-text away">
                <span className="team">{away.team}</span>
                <span className="stats">{away.stats}</span>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
