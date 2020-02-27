import React, { useState } from "react";
import { Typography, Descriptions, Switch, Badge, Radio } from "antd";

const { Title, Paragraph } = Typography;
const { Item } = Descriptions;

export default () => {
  const [checked, setChecked] = useState(false);
  const [layout, setLayout] = useState("vertical");
  return (
    <div className="demo-description">
      <Title level={3} copyable>
        Description 描述
      </Title>
      <Paragraph>成组展示多个只读字段。</Paragraph>
      <div className="demo-wrapper">
        <Radio.Group
          onChange={e => {
            setLayout(e.target.value);
          }}
          value={layout}
          style={{ marginBottom: 20 }}
        >
          <Radio value="vertical">vertical</Radio>
          <Radio value="horizontal">horizontal</Radio>
        </Radio.Group>
        <Descriptions
          title="球员信息"
          bordered={checked}
          style={{ width: 900 }}
          layout={layout}
          column={{
            xs: 1,
            sm: 2,
            lg: 3
          }}
        >
          <Item label="姓名">徐斌</Item>
          <Item label="电话">06 59 65 77 08</Item>
          <Item label="邮箱">xubinqz@gmail.com</Item>
          <Item label="得分">45</Item>
          <Descriptions.Item label="状态" span={3}>
            <Badge status="processing" text="running" />
          </Descriptions.Item>
          s
          <Descriptions.Item label="地址">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <Switch
          style={{ marginTop: 20 }}
          checkedChildren="bordered"
          unCheckedChildren="unbordered"
          checked={checked}
          onChange={checked => setChecked(checked)}
        />
      </div>
    </div>
  );
};
