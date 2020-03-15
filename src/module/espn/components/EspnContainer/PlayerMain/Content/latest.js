import React from "react";
import { Card, Badge, Typography } from "antd";

import './content.less';

const { Paragraph } = Typography;


export default ({ title, extra, content, timing, powerby }) => {
  return (
    <Card
      className="latest-news"
      title={title}
      extra={<Badge status={extra.status} text={extra.text} />}
    >
      <Paragraph>
        <span className="timing">{timing}</span> - {content}
      </Paragraph>
      <span className="power-by">{powerby}</span>
    </Card>
  );
};
