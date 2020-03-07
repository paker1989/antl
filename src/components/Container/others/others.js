import React, { Fragment, useState } from "react";
import {
  Typography,
  Row,
  Col,
  Button,
  Card,
  Avatar,
  Icon,
  Badge,
  Tag,
  message,
  Input,
  BackTop
} from "antd";
import "./others.less";

const { Title, Paragraph } = Typography;
const { CheckableTag } = Tag;

export default () => {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [addTag, setAddTag] = useState(false);
  const [dynamicTags, setDynamicTags] = useState([]);
  const [checked, setChecked] = useState(false);

  const UserList = ["U", "Lucy", "Tom", "Edward"];
  const colorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  const confirmAddTag = e => {
    // message.info(e.target.value);
    const newTag = e.target.value;
    dynamicTags.unshift(newTag);
    setDynamicTags([...dynamicTags]);
    setAddTag(false);
  };
  return (
    <Fragment>
      <BackTop />
      <BackTop>
        <div className="ant-back-top-inner">UP</div>
      </BackTop>
      <Title level={3}>其他组件</Title>
      <Paragraph>剩下的其他组件:</Paragraph>
      <Paragraph>
        <ul>
          <li>Button</li>
          <li>Avatar</li>
          <li>Badge</li>
          <li>Tag</li>
          <li>BackTop</li>
        </ul>
      </Paragraph>
      <Row gutter={40}>
        <Col span={8}>
          <Card title="Button">
            <Row gutter={30} type="flex" justify="space-between">
              <Button type="primary" shape="circle-outline" icon="search" />
              <Button type="primary" shape="circle" icon="search" />
              <Button type="dashed" icon="download">
                Download
              </Button>
              <Button shape="round" type="primary" icon="cloud" size="large" />
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Avatar">
            <Row gutter={30} type="flex" justify="space-between">
              <Avatar
                alt="图片无法显示"
                shape="circle"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <Avatar alt="图片无法显示" shape="square" size="large" />
              <Avatar alt="图片无法显示" shape="square" size={30} />
              <Avatar
                icon={<Icon type="user" />}
                style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              />
            </Row>
            <Row
              gutter={40}
              type="flex"
              justify="space-around"
              style={{ marginTop: 50 }}
            >
              <Button
                onClick={() => {
                  setAvatarIndex(
                    avatarIndex === UserList.length - 1 ? 0 : avatarIndex + 1
                  );
                }}
              >
                Change
              </Button>
              <Avatar style={{ backgroundColor: colorList[avatarIndex] }}>
                {UserList[avatarIndex]}
              </Avatar>
              <Badge count={1}>
                <Avatar shape="square" icon="user" />
              </Badge>
              <Badge dot>
                <Avatar shape="square" icon="user" />
              </Badge>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Badge">
            <Row gutter={30} type="flex" justify="space-around">
              <Badge overflowCount={999} count={12}>
                <pre className="badge-obj"></pre>
              </Badge>
              <Badge overflowCount={10} count={14}>
                <Avatar icon="user" />
              </Badge>
              <Badge
                count={
                  <Icon type="clock-circle" style={{ color: "#f5222d" }} />
                }
              >
                <Avatar icon="email" shape="square" />
              </Badge>
            </Row>
            <Row gutter={30} type="flex" justify="space-around">
              <Badge dot>
                <a href="#">Link something</a>
              </Badge>
              <Badge dot>
                <Icon type="notification" />
              </Badge>
              <Badge
                count={12}
                overflowCount={10}
                style={{ backgroundColor: "#52c41a" }}
              />
              <Badge status="processing" text="processing" />
            </Row>
          </Card>
        </Col>
      </Row>
      <Row gutter={40}>
        <Col span={8}>
          <Card title="Tag">
            <Row gutter={30} type="flex" justify="space-around">
              <Tag>Tag1</Tag>
              <Tag
                closable
                onClose={() => {
                  message.info("close tag");
                }}
              >
                Tag2
              </Tag>
              {dynamicTags.map((tag, index) => (
                <Tag key={`dy-${index}`} closable>
                  {tag}
                </Tag>
              ))}
              {!addTag && (
                <Button
                  type="dashed"
                  size="small"
                  icon="plus"
                  onClick={() => setAddTag(true)}
                >
                  Add tag
                </Button>
              )}
              {addTag && (
                <Input
                  onPressEnter={confirmAddTag}
                  onBlur={confirmAddTag}
                  size="small"
                  style={{ width: 78 }}
                />
              )}
            </Row>
            <Row
              gutter={30}
              type="flex"
              justify="space-around"
              style={{ marginTop: 40 }}
            >
              <Tag color="orange">orange</Tag>
            </Row>
            <Row
              gutter={30}
              type="flex"
              justify="space-around"
              style={{ marginTop: 40 }}
            >
              <CheckableTag
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              >
                Checkable
              </CheckableTag>
            </Row>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
