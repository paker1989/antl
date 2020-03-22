import React from "react";
import { Card, Typography, Icon } from "antd";

import "./latestNews.less";

const { Title, Paragraph } = Typography;
// const { Meta } = Card;

export default ({ coverImg, footer, content, isVideo, source }) => {
  const cover = isVideo ? (
    <div className="video-cover">
      <div className="media-button center-container">
        <Icon type="caret-right" style={{fontSize: '16px'}}/>
      </div>
      <img className="cover-img" alt="example" src={coverImg} />
    </div>
  ) : (
    <img className="cover-img" alt="example" src={coverImg} />
  );
  return (
    <Card
      className="news-card"
      hoverable
      cover={cover}
      actions={[
        <Paragraph ellipsis={{ rows: 1 }} className="footer">
          {footer}
        </Paragraph>
      ]}
    >
      <Paragraph ellipsis={{ rows: 4 }} className="content">
        {content}
      </Paragraph>
    </Card>
  );
};
