import React, { useState } from "react";
import { List, Icon, Typography, Avatar } from 'antd';

import LoadMore from './list.loadMore';

import "./list.less";

const { Title, Text, Paragraph } = Typography;

export default () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
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
          footer={
            <Typography.Title level={4}>Footer</Typography.Title>
          }
          dataSource={data}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> {item}
              </List.Item>
            )
          }}
          bordered
          size="large"
        >

        </List>
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
          footer={
            <Typography.Title level={4}>Footer</Typography.Title>
          }
          dataSource={data}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <List.Item.Meta
                  style={{ padding: "10px 0 10px 30px" }}
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  description={item}
                  title={`Item-${index + 1}`}
                />
              </List.Item>
            )
          }}
          bordered
          size="large"
          itemLayout="horizontal"
          style={{ width: 500 }}
        />
      </div>
      <LoadMore />
    </div>
  );
}