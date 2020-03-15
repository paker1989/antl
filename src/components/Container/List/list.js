import React from "react";
import { List, Icon, Typography, Avatar, Card } from "antd";

import LoadMore from "./list.loadMore";
import ListPagination from "./list.pagination";
import ListInfinite from "./list.infinite";

import "./list.less";

const { Text } = Typography;

export default () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires."
  ];

  const data1 = [
    {
      title: "Title 1"
    },
    {
      title: "Title 2"
    },
    {
      title: "Title 3"
    },
    {
      title: "Title 4"
    }
  ];

  return (
    <div className="demo-list">
      <h1 className="demo-title">List 列表</h1>
      <div className="demo-wrapper">
        <List
          header={
            <div>
              <Icon type="user" />
              <Text copyable>User center</Text>
              {/* <Typography.Title level={4}>User center</Typography.Title> */}
            </div>
          }
          footer={<Typography.Title level={4}>Footer</Typography.Title>}
          dataSource={data}
          renderItem={item => {
            return (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            );
          }}
          bordered
          size="large"
        ></List>
      </div>
      <div className="demo-wrapper">
        <List
          header={
            <div>
              <Icon type="user" />
              <Text copyable>User center</Text>
              {/* <Typography.Title level={4}>User center</Typography.Title> */}
            </div>
          }
          footer={<Typography.Title level={4}>Footer</Typography.Title>}
          dataSource={data}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <List.Item.Meta
                  style={{ padding: "10px 0 10px 30px" }}
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  }
                  description={item}
                  title={`Item-${index + 1}`}
                />
              </List.Item>
            );
          }}
          bordered
          size="large"
          itemLayout="horizontal"
          style={{ width: 500 }}
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">Grid</h1>
        <List
          grid={{ gutter: 10, xs: 2, lg: 4 }}
          dataSource={data1}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>Card content</Card>
            </List.Item>
          )}
        />
      </div>
      <LoadMore />
      <ListPagination />
      <ListInfinite />
    </div>
  );
};
