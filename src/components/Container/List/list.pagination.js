import React from "react";
import { List, Avatar, Icon } from "antd";

import "./list.less";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

export default () => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  return (
    <div className="demo-wrapper">
      <h1 className="demo-title sm">Pagination</h1>
      <List
        dataSource={listData}
        bordered
        pagination={{
          position: "top",
          pageSize: 3
        }}
        size="large"
        itemLayout="vertical"
        style={{ width: 800 }}
        renderItem={item => {
          return (
            <List.Item
              actions={[
                <IconText
                  type="star-o"
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  type="like-o"
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText type="message" text="2" key="list-vertical-message" />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={item.title}
                avatar={<Avatar src={item.avatar} />}
                description={item.description}
              />
              {item.content}
            </List.Item>
          );
        }}
      />
    </div>
  );
};
