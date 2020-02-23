import React from "react";
import { Pagination, message } from "antd";

import "./pagination.less";

export default () => {
  return (
    <div className="demo-pagination">
      <h1 className="demo-title">Pagination 分页</h1>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">
          defaultCurrent, showQuickJumper, showSizeChanger, showTotal, onChange
        </h1>
        <Pagination
          defaultCurrent={1}
          total={900}
          showQuickJumper
          showSizeChanger
          showTotal={(total, range) =>
            `一共${total}, 当前显示${range[0]}到${range[1]}`
          }
          onChange={pageNumber => {
            message.info(`go to ${pageNumber}`);
          }}
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">迷你版本</h1>
        <Pagination
          size="small"
          total={400}
          itemRender={(page, type, originalE) => {
            if (type === "prev") {
              return <a>Previous</a>;
            }
            if (type === "next") {
              return <a>Next</a>;
            }
            return originalE;
          }}
        />
      </div>
    </div>
  );
};
