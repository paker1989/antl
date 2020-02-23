import React, { useState } from "react";
import {
  Input,
  Divider,
  Dropdown,
  Menu,
  Row,
  Col,
  Select,
  Icon,
  Tooltip,
  Spin,
  Alert,
  Switch
} from "antd";

import "./input.less";

const { Search } = Input;
const { Option } = Select;

export default () => {
  const [alertChecked, setAlertChecked] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="item1">+33</Menu.Item>
      <Menu.Item key="item2">+22</Menu.Item>
    </Menu>
  );

  return (
    <div className="demo-pagination">
      <h1 className="demo-title">Input</h1>
      <div className="demo-wrapper">
        <div style={{ width: "400px", position: "relative" }}>
          <Input type="text" placeholder="请输入性取向" />
          <Divider dashed />
          <Input
            type="text"
            placeholder="请输入网址"
            addonBefore={<span>https://</span>}
            addonAfter={<span>.com></span>}
          />
          <Divider dashed />
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <Divider dashed />
          <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="Extra information">
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Divider dashed />
          <Input prefix="￥" suffix="RMB" placeholder="支付数额" />
        </div>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title">组合</h1>
        <Input
          type="text"
          placeholder="电话号码"
          addonBefore={
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={["click"]}
            >
              <span>请选择区号</span>
            </Dropdown>
          }
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title">Input.Group</h1>
        <Input.Group compact>
          <Input style={{ width: "20%" }} defaultValue="0571" />
          <Input style={{ width: "30%" }} defaultValue="26888888" />
        </Input.Group>
        <Divider dashed />
        <Input.Group>
          <Row gutter={40}>
            <Col span={6}>
              <Input defaultValue="0571" />
            </Col>
            <Col span={12}>
              <Input defaultValue="26888888" />
            </Col>
          </Row>
        </Input.Group>
        <Divider dashed />
        <Input.Group compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input style={{ width: "50%" }} defaultValue="26888888" />
        </Input.Group>
        <Divider dashed />
        <Input.Group compact>
          <Select defaultValue="between">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input
            style={{ width: 100, textAlign: "center" }}
            placeholder="minimum"
          />
          <Input
            placeholder="-"
            style={{ width: "30px", textAlign: "center" }}
            disabled
          />
          <Input
            style={{ width: 100, textAlign: "center" }}
            placeholder="maximum"
          />
        </Input.Group>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title">Search</h1>
        <Search
          style={{ width: 400 }}
          placeholder="input search loading deault"
          loading
        />
        <Divider dashed />
        <Search
          style={{ width: 400 }}
          placeholder="input search loading with enterButton"
          loading
          enterButton
        />
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">Spin</h1>
        <div className="demo-wrapper">
          <Spin />
          <Divider dashed />
          <Spin
            tip="loading with 500 ms delay.."
            spinning={alertChecked}
            wrapperClassName="spin-container"
            delay={500}
            indicator={<Icon type="mail"/>}
          >
            <Alert
              message="loading it"
              type="info"
              closable
              description="please wait to load"
            />
          </Spin>
          {/* <Divider dashed/> */}
          <Switch
            checked={alertChecked}
            onChange={(checked, evt) => {
              setAlertChecked(checked);
            }}
          />
        </div>
      </div>
    </div>
  );
};
