import React from 'react';
import { Card, Statistic } from 'antd';

import './content.less';

export default ({ title, stat }) => {
  return (
    <Card title={title} className="espn-card info-card">
      <Statistic value={stat} />
    </Card>
  );
}