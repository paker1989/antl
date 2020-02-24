import React, { useState } from "react";
import { Select, Divider, Switch, Icon } from "antd";

import "./select.less";

const { Option, OptGroup } = Select;

export default () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  return (
    <div className="demo-select">
      <h1 className="demo-title">Select</h1>
      <div className="demo-wrapper">
        <Select defaultValue="1" style={{ width: 120 }}>
          <Option value="0">Lucy</Option>
          <Option value="1">Lily</Option>
        </Select>
        <Select defaultValue="1" style={{ width: 120 }} disabled>
          <Option value="0">Lucy</Option>
          <Option value="1">Lily</Option>
        </Select>
        <Select defaultValue="1" style={{ width: 120 }} loading={loading}>
          <Option value="0">Lucy</Option>
          <Option value="1">Lily</Option>
        </Select>
        <Divider style={{ width: 400 }} orientation="left">
          设置loading
        </Divider>
        <Switch
          style={{ width: 100 }}
          checkedChildren="Loading"
          unCheckedChildren="Not loading"
          defaultChecked={false}
          onChange={checked => {
            setLoading(checked);
          }}
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">带搜索框</h1>
        <Select
          placeholder="请输入想翻拍的妹子"
          showSearch
          style={{ width: 220 }}
          // optionFilterProp="value"
          filterOption={(input, option) => {
            console.log(input);
            console.log(option);
            return (
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            );
          }}
        >
          <Option value="0">Lucy</Option>
          <Option value="1">Lily</Option>
        </Select>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">自动分词</h1>
        <Select
          mode="tags"
          style={{ width: 400 }}
          tokenSeparators={["#"]}
          size="large"
        >
          <Option value="0">Lucy</Option>
        </Select>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">dropdownRender</h1>
        <Select
          suffixIcon={<Icon type="edit"/>}
          defaultValue="1"
          dropdownRender={(menu, props) => {
            return (
              <div>
                {menu}
                <Divider style={{ fontSize: 12 }} orientation="center">
                  分割线
                </Divider>
                <span
                  style={{ padding: "4px 8px", cursor: "pointer" }}
                  onMouseDown={e => e.preventDefault()}
                  onClick={e => {
                    setItems(items.concat([{ title: `element${items.length}` }]));
                  }}
                >
                  <span>增加贵妃</span>
                  <Icon type="edit" style={{ marginLeft: 5 }} />
                </span>
              </div>
            );
          }}
          style={{ width: 120 }}
        >
          <OptGroup label="贵妃">
            <Option value="0">Lucy</Option>
            <Option value="1">Lily</Option>
          </OptGroup>
          <OptGroup label="答应">
            <Option value="2">甄嬛</Option>
            <Option value="3">扭轱辘.诗诗</Option>
          </OptGroup>
          {items.map((item, index) => {
            return (
              <Option key={`item${index}`} value={`item-${index + 3}`}>
                {item.title}
              </Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};
