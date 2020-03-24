import React from "react";
import { Card, List, Icon, Typography } from "antd";

import "./rightSider.less";
// import Paragraph from "antd/lib/skeleton/Paragraph";

const { Paragraph } = Typography;

const videoSourceProps = [
  { title: "Is Giannis or LeBron leading the MVP race?", length: "1:20" },
  { title: "On this date: LeBron makes Nurkic a screen saver", length: "2:09" },
  { title: "Where the West contenders stand at the hiatus", length: "0:19" }
];
export default () => {
  return (
    <Card className="latest-video espn-card" title="Latest Video">
      <iframe
        title="latest-video-source"
        // width="560"
        // height="315"
        className="video-source"
        src="https://www.youtube.com/embed/zxDlkC3zGUw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <List
        dataSource={videoSourceProps}
        renderItem={(item, index) => (
          <List.Item key={`video-${index}`}>
            <List.Item.Meta
              title={
                <div className="meta-title">
                  <Icon type="caret-right" />
                  {item.title}
                </div>
              }
              description={item.length}
            />
          </List.Item>
        )}
        footer={<a href="https://nba/seeAll.com">See All</a>}
      />
    </Card>
  );
};
