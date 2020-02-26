import React, { useState } from "react";
import "./carousel.less";
import { Card, Row, Col, Divider, Carousel, Radio, Icon } from "antd";

const { Meta } = Card;
export default () => {
  const [dotPos, setDotPos] = useState("bottom");
  return (
    <div className="demo-carousel">
      <h1 className="demo-title">Carousel 走马灯</h1>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">基本用法</h1>
        <Row gutter={20}>
          <Col xs={24} lg={12}>
            <Card>
              <Carousel>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
              <Divider orientation="left" style={{ fontSize: 12 }}>
                基本用法
              </Divider>
              <Meta description="最简单的用法。" />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card>
              <Radio.Group
                style={{ marginBottom: 10 }}
                value={dotPos}
                onChange={e => setDotPos(e.target.value)}
              >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="left">Left</Radio.Button>
                <Radio.Button value="right">Right</Radio.Button>
              </Radio.Group>
              <Carousel dotPosition={dotPos} autoplay effect="fade">
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
              </Carousel>
              <Divider orientation="left" style={{ fontSize: 12 }}>
                <span>
                  位置
                  <Icon type="edit" style={{ marginRight: 12 }} />
                </span>
              </Divider>
              <Meta
                description={
                  <span>
                    位置有 4 个方向。使用<b>dotPosition</b>
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
