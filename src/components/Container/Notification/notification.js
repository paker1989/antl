import React, { Fragment } from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Divider,
  Button,
  Icon,
  notification,
  message
} from "antd";
import PopConfirmPanel from "./popConfirm";

import "./notification.less";

const { Title, Paragraph } = Typography;
// const { Link } = Anchor;

export default () => {
  const openWithType = type => {
    const key = `open${Date.now()}`;
    notification[type]({
      message: "Notification Title",
      description: `This is the content of the notification. This is the conte
                nt of the notification. This is the content of the notification.`,
      key,
      btn: (
        <Button type="primary" onClick={() => notification.close(key)}>
          关闭
        </Button>
      )
    });
  };
  return (
    <Fragment>
      <Title level={2}>Notification通知提醒框</Title>
      <Paragraph>全局展示通知提醒信息。</Paragraph>
      <Title level={4}>何时使用</Title>
      <Paragraph>在系统四个角显示通知提醒信息。</Paragraph>
      <div>
        <Title level={4}>代码演示</Title>
        <Row gutter={30} type="flex" justify="center">
          <Col xs={24} lg={12}>
            <Card>
              <Button
                type="primary"
                onClick={() => {
                  let key = `open${Date.now()}`;
                  notification.open({
                    message: "Notification Title",
                    key,
                    description:
                      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
                    onClick: () => {
                      message.info("going to close");
                    },
                    style: {
                      width: 600,
                      marginLeft: 335 - 600
                    },
                    duration: 0,
                    icon: <Icon type="smile" style={{ color: "#108ee9" }} />
                  });

                  setTimeout(() => {
                    notification.open({
                      key,
                      message: "Tile has been changed",
                      description: "New Description"
                    });
                  }, 1000);
                }}
              >
                Open the notification box
              </Button>
              <Divider orientation="left" style={{ fontSize: 13 }}>
                <span>
                  基本
                  <Icon type="edit" />
                </span>
              </Divider>
              <Card.Meta description="最简单的用法，4.5 秒后自动关闭。" />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Button.Group>
                <Button
                  onClick={() => {
                    openWithType("success");
                  }}
                >
                  Success
                </Button>
                <Button
                  onClick={() => {
                    openWithType("info");
                  }}
                >
                  Info
                </Button>
                <Button
                  onClick={() => {
                    openWithType("warning");
                  }}
                >
                  Warning
                </Button>
              </Button.Group>

              <Divider orientation="left" style={{ fontSize: 13 }}>
                <span>
                  带有图标的通知提醒框
                  <Icon type="edit" />
                </span>
              </Divider>
              <Card.Meta description="通知提醒框左侧有图标" />
            </Card>
          </Col>
        </Row>
        <Divider style={{ fontSize: 13 }} orientation="left">
          <span>
            以下是Popconfirm demo
            <Icon type="edit" />
          </span>
        </Divider>
        <PopConfirmPanel />
      </div>
    </Fragment>
  );
};
