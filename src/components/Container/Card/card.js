import React, { useState } from "react";
import { Card, Icon, Button, Spin, Avatar, Row, Col, Skeleton, Divider } from "antd";

import CardTab from './card.tab';
import CardGeneral from './card.general';

import "./card.less";

const { Meta } = Card;

export default () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="demo-cards">
      <h1 className="demo-title">Card</h1>
      <div className="demo-wrapper">
        <Card
          className="fix-width"
          title="Default Size card"
          bordered
          extra={loading ? <Spin /> : <Icon type="edit" />}
          // loading={loading}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Skeleton loading={loading} avatar active>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Skeleton>

        </Card>
        <Button type="primary"
          onClick={() => {
            if (loading) {
              return;
            }
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          }}
        >加载数据</Button>
      </div>
      <div className="demo-wrapper">
        <Card size="small" className="fix-width">
          <p>只包括内容区域</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">Card.Meta</h1>
        <Card
          style={{ width: 280 }}
          hoverable
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />}
            description="My most respect to Kobe"
            title="Lbj's latest twitter"
          />
        </Card>
      </div>
      <div className="demo-wrapper" style={{ backgroundColor: "#ECECEC" }}>
        <h1 className="demo-title sm">配合Row, Col</h1>
        <Row gutter={16}>
          <Col span={8}>
            <Card size="small">
              <p>只包括内容区域</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <p>只包括内容区域</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card size="small">
              <p>只包括内容区域</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">Card Grid</h1>
        <Card title="Card in Grids"
          style={{ width: 800 }}
          actions={[
            <Icon type="setting" key="setting" />,
            <Icon type="edit" key="edit" />,
            <Icon type="ellipsis" key="ellipsis" />,
          ]}>
          {/* <Meta
            description="show how to use grid in card"
            title="Data grid layout"
          /> */}
          <Card.Grid style={{ width: '40%' }}>content</Card.Grid>
          <Card.Grid>content</Card.Grid>
        </Card>
        <Divider orientation="left" style={{ fontSize: 12 }} dashed>Next show Inner case</Divider>
        <Card className="fix-width" title="Parent card">
          <Card type="inner" title="Inner card">
            Inner Card
          </Card>
        </Card>
      </div>
      <div className="demo-wrapper">
        <CardTab />
        <Divider orientation="left" style={{ fontSize: 12 }} dashed>综合效果</Divider>
        <CardGeneral/>
      </div>
    </div>
  );
};
