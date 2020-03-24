import React from "react";
import { Table, Card } from "antd";
import cx from "classnames";

import "../content.less";

export default ({ title, dataSource, columns, extra, className }) => {
  const wrapperClass = cx(
    {
      "espn-card": true,
      'stats-table':  true,
    },
    className
  );
  return (
    <Card className={wrapperClass} title={title} extra={extra}>
      <Table
        className="espn-table"
        dataSource={dataSource}
        columns={columns}
        size="small"
        pagination={false}
        // rowSelection={{ ...rowSelections }}
        bordered={false}
      />
    </Card>
  );
};
