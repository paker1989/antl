import React from "react";
import { Card, List, Icon } from "antd";
import "./sider.less";

const { Item } = List;
export default ({ title, data }) => {
  return (
    <Card className="quick-link" title={title}>
      <List
        dataSource={data}
        renderItem={(item, index) => (
          <Item key={`card-${index}`}>
            <span>
              <Icon type={item.icon} style={{marginRight: 20}}/>
              <span>{item.title}</span>
            </span>
          </Item>
        )}
      ></List>
    </Card>
  );
};
