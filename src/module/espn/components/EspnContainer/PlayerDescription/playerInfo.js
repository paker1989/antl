import React from "react";
import { Descriptions, Badge, Divider } from "antd";
import './playerDesc.less';

const { Item } = Descriptions;

export default () => {
  return (
    <div className="player-info">
      <Divider type="vertical" className="devider" dashed/>
      <Descriptions column={1} className="info-body">
        <Item label="HT/WT">6' 9", 250 lbs</Item>
        <Item label="DOB">12/30/1984 (35)</Item>
        <Item label="DRAFT INFO">2003: Rd 1, Pk 1 (CLE)</Item>
        <Item label="STATUS">
          <Badge status="processing" text="Day-To-Day" />
        </Item>
        <Item label="EXPERIENCE">16th Season</Item>
      </Descriptions>
    </div>
  );
};
