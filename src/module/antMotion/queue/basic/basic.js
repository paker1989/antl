import React, { useState } from "react";
import QueueAnim from "rc-queue-anim";
import { Typography, Tag, Button, Row, Col } from "antd";

import "./basic.less";
// import Paragraph from 'antd/lib/skeleton/Paragraph';

const { Title, Paragraph } = Typography;

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div className="demo-container">
      <Title level={4}>QueueAnim进出场动画</Title>
      <Paragraph>通过简单的配置对一组元素添加串行的进场动画效果</Paragraph>
      <Paragraph>
        <Tag>rc-queue-anim</Tag>
        <Tag>key</Tag>
      </Paragraph>
      <Paragraph>
        <Title level={4} style={{ fontSize: 20 }}>
          何时使用
        </Title>
        <ul>
          <li>
            从内容 A
            到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。
          </li>
          <li>
            小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来突显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感
          </li>
          <li>
            特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。
          </li>
        </ul>
      </Paragraph>
      <Row>
        <Col md={24} lg={12}>
          <div className="demo-container">
            <Paragraph>简单例子</Paragraph>
            <QueueAnim delay={300} className="queue-simple">
              <div key="a">Queue Demo</div>
              <div key="b">Queue Demo</div>
              <div key="c">Queue Demo</div>
              <div key="d">Queue Demo</div>
            </QueueAnim>
          </div>
        </Col>
        <Col md={24} lg={12}>
          <div className="demo-container">
            <Paragraph>进场和离场</Paragraph>
            <Paragraph>
              <Tag>type</Tag>
              <Tag>ease</Tag>
            </Paragraph>
            <Button
              type="primary"
              style={{ marginBottom: 30 }}
              onClick={() => {
                setShow(!show);
              }}
            >
              Switch
            </Button>
            <QueueAnim
              delay={300}
              className="demo-content"
              type={["top", "right"]}
            >
              {show
                ? [
                    <div className="demo-thead" key="1"></div>,
                    <div className="demo-tbody" key="2">
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  ]
                : null}
            </QueueAnim>
          </div>
        </Col>
      </Row>
    </div>
  );
};
