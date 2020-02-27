import React from "react";
import { Empty, Button, Select } from "antd";
import EmptySelect from "./empty.select";

import "./empty.less";

// const { Option } = Select;

export default () => {
  return (
    <div className="demo-empty">
      <h1 className="demo-title">Empty 空状态</h1>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">基本使用</h1>
        <Empty />
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        <Empty
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          description={
            <span>
              Customize <a href="#">Description</a>
            </span>
          }
        >
          <Button type="primary">Create Now</Button>
        </Empty>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">
          ConfigProvider using empty for other components
        </h1>
        <EmptySelect />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">无描述</h1>
        <Empty description={false} />
      </div>
    </div>
  );
};
