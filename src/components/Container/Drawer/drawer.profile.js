import React, { useState } from "react";
import { Drawer, List, Avatar, Row, Col, Divider } from "antd";

import "./drawer.less";

export default () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const DescriptionItem = (title, content) => (
    <div className="description-item">
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </div>
  );

  return (
    <React.Fragment>
      <List
        dataSource={[
          {
            name: "Xu Bin",
            job: "Software engineer"
          },
          {
            name: "YU Xinxiu",
            job: "Business Analyst"
          }
        ]}
        bordered
        renderItem={(item, index) => {
          return (
            <List.Item
              key={`item-${index}`}
              actions={[
                // eslint-disable-next-line
                <a onClick={showDrawer} key={`a-${index}`}>
                  View Profile
                </a>
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={item.name}
                description={item.job}
              />
            </List.Item>
          );
        }}
      />
      <Drawer
        placement="right"
        width={400}
        closable={false}
        visible={visible}
        onClose={() => setVisible(false)}
        title="Your Profile"
      >
        <Row>
          <Col span={24}>
            <h2>Personal</h2>
          </Col>
        </Row>
        <Row>
          <Col span={8}>{DescriptionItem("Full name", "Xu bin")}</Col>
          <Col span={8} offset={8}>
            {DescriptionItem("Account", "xubinqz@gmail.com")}
          </Col>
        </Row>
        <Row>
          <Col span={8}>{DescriptionItem("City", "Hang zhou")}</Col>
          <Col span={8} offset={8}>
            {DescriptionItem("Country", "China")}
          </Col>
        </Row>
        <Divider orientation="center" dashed style={{ fontSize: 12 }}>
          详情在下方
        </Divider>
        <Row>
          <Col span={24}>
            {DescriptionItem(
              "Message",
              `C / C + +, data structures,
             software engineering, operating systems, computer networks,
              databases, compiler theory, computer architecture, Microcomputer
               Principle and Interface Technology, Computer English, Java, ASP, etc.`
            )}
          </Col>
        </Row>
      </Drawer>
    </React.Fragment>
  );
};
