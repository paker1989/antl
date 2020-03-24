import React, { Fragment } from "react";
// import SmallDashOutlined from "antd";
import {
  Typography,
  PageHeader,
  Dropdown,
  Tag,
  Button,
  Descriptions,
  Menu,
  Icon,
  Divider,
  Row,
  Col
} from "antd";

import "./pageHeader.less";

const { Title, Paragraph } = Typography;
const { Item } = Descriptions;

export default () => {
  const routes = [
    {
      path: "index",
      breadcrumbName: "First-level Menu"
    },
    {
      path: "first",
      breadcrumbName: "Second-level Menu"
    },
    {
      path: "second",
      breadcrumbName: "Third-level Menu"
    }
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const IconLink = ({ src, text }) => (
    <a
      href="google.com"
      style={{
        marginRight: 20,
        marginBottom: 20,
        display: "flex",
        alignItems: "center"
      }}
    >
      <img
        style={{
          marginRight: 8
        }}
        src={src}
        alt="start"
      />
      {text}
    </a>
  );

  return (
    <Fragment>
      <Title level={3}>PageHeader</Title>
      <div className="demo-wrapper">
        <PageHeader
          style={{
            //  width: 500,
            border: "1px solid rgb(235, 237, 240)"
          }}
          title="安家名片"
          subTitle="职业经理人"
          // extra={<a href="https://anjia.com">More</a>}
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
            <Dropdown key="0" overlay={menu}>
              <Icon type="ordered-list" />
            </Dropdown>
          ]}
          onBack={() => window.history.back()}
          avatar={{ src: "https://image.ijq.tv/201503/18/13-10-49-72-12.jpg" }}
          tags={[
            <Tag color="blue" key="b1">
              bonus
            </Tag>,
            <Tag color="red" key="r2">
              level
            </Tag>
          ]}
          ghost={false}
          breadcrumb={{ routes }}
        >
          <Descriptions column={2}>
            <Item label="Created">孙俪</Item>
            <Item label="Association">
              <a href="https://google.com">443442</a>
            </Item>
            <Item label="Creation Time">2017-01-10</Item>
            <Item label="Effective Time">2017-01-10</Item>
            <Item label="Remarks" span={2}>
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Item>
          </Descriptions>
          <Divider orientation="left" style={{ fontWeight: 300, fontSize: 12 }}>
            详情如下
          </Divider>
          <Row gutter={50}>
            <Col lg={16} sm={24}>
              <Paragraph>
                Ant Design interprets the color system into two levels: a
                system-level color system and a product-level color system.
              </Paragraph>
              <Paragraph>
                Ant Design's design team preferred to design with the HSB color
                model, which makes it easier for designers to have a clear
                psychological expectation of color when adjusting colors, as
                well as facilitate communication in teams.
              </Paragraph>
            </Col>
            <Col lg={8} sm={24}>
              <img
                src="https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original"
                alt="content"
                style={{ marginBottom: 20 }}
              />
            </Col>
          </Row>
          <Row type="flex" align="middle">
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text="Quick Start"
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
              text=" Product Info"
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text="Product Doc"
            />
          </Row>
        </PageHeader>
      </div>
    </Fragment>
  );
};
