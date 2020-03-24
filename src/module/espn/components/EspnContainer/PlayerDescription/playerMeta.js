import React from "react";
import { Button, Row, Col, Badge } from "antd";

import "./playerDesc.less";

export default ({ bgImage, userMeta }) => {
  console.log(userMeta.avatar);
  const { team, number, position } = userMeta.meta;
  return (
    <Row className="playerMeta">
      <Col span={12}>
        <div
          className="playerMeta-avatar"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="modal-layer"></div>
          <img alt={userMeta.name} src={userMeta.avatar} />
        </div>
      </Col>
      <Col span={12}>
        <div className="playerMeta-body">
          <span className="meta-name">
            <span className="name fm">{userMeta.firstName}</span>
            <span className="name lm">{userMeta.lastName}</span>
          </span>
          <div className="meta-content">
            <img src={bgImage} alt="example"/>
            <span>{team}</span>
            <Badge status="default" style={{ margin: "0 10px" }} />
            <span>{number}</span>
            <Badge status="default" style={{ margin: "0 10px" }} />
            <span>{position}</span>
          </div>
          <span>
            <Button type="primary" shape="round" className="follow-btn">
              Follow
            </Button>
          </span>
        </div>
      </Col>
    </Row>
  );
};
