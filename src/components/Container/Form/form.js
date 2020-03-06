import React, { Fragment } from "react";
import { Typography, Row, Col } from "antd";
import InlineLogin from "./form.inline.login";
import NormalRegister from "./form.register";
import CompleteRegister from "./form.complete";
import DynamicField from "./form.addField";
import CustomForm from "./custom.form";
import ParentDataForm from "./parent.data";
import CompleteDemo from "./complete.demo";
import ManualSetValue from "./manual.setValue";
import OtherItemsForm from "./other.formItem";

import "./form.less";

const { Title, Text, Paragraph } = Typography;

export default () => {
  return (
    <Fragment>
      <Row>
        <Col lg={16} xs={24}>
          <Title level={3} editable>
            Form 表单
          </Title>
          <Title level={4}>何时使用</Title>
          <Paragraph>
            <ul>
              <li>用于创建一个实体或收集信息。</li>
              <li>需要对输入的数据类型进行校验时。</li>
            </ul>
          </Paragraph>
        </Col>
      </Row>
      <Row
        type="flex"
        justify="space-around"
        gutter={40}
        style={{ paddingLeft: "40px" }}
      >
        <Col span={12}>
          <Title level={4}>内联登陆栏</Title>
          <InlineLogin />
        </Col>
        <Col span={12}>
          <Title level={4}>登陆框</Title>
          <NormalRegister />
        </Col>
      </Row>
      <Row
        type="flex"
        justify="space-around"
        gutter={40}
        style={{ paddingLeft: "40px" }}
      >
        <Col span={12}>
          <Title level={4}>注册新用户</Title>
          <CompleteRegister />
        </Col>
        <Col span={12}>
          <Title level={4}>动态添加</Title>
          <Paragraph>
            需要注意
            <Text
              code
            >{`getFieldDecorator("keys", { initialValue: [] });`}</Text>
            , 否则form检测不到新加的field
          </Paragraph>
          <DynamicField />
        </Col>
      </Row>
      <Row
        type="flex"
        justify="start"
        gutter={40}
        style={{ paddingLeft: "40px" }}
      >
        <Col span={12}>
          <Title level={4}>自定义Form，只需遵循几项规则</Title>
          <Paragraph>
            <ul>
              <li>
                提供受控属性 <Text code>value</Text> 或其它与{" "}
                <Text code>valuePropName</Text> 的值同名的属性。
              </li>
              <li>
                提供 <Text code>onChange</Text> 事件或<Text code>trigger</Text>{" "}
                的值同名的事件。
              </li>
              <li>支持 ref</li>
            </ul>
          </Paragraph>
          <CustomForm />
        </Col>
        <Col span={12}>
          <Title level={3}>表单数据储存于上层控件</Title>
          <Paragraph>
            通过使用 <Text code>onFieldsChange</Text> 与
            <Text code>mapPropsToFields</Text>
            ，可以把表单的数据存储到上层组件或者 Redux、dva 中注意：
            <Text code>mapPropsToFields</Text>
            里面返回的表单域数据必须使用 <Text code>Form.createFormField</Text>
            包装。
          </Paragraph>
          <ParentDataForm />
        </Col>
      </Row>
      <Row gutter={40}>
        <Col span={12}>
          <Title level={4}>自定义校验</Title>
          <Paragraph>
            我们提供了 <Text code>validateStatus help hasFeedback</Text>{" "}
            等属性，你可以不需要使用
            <Text code>Form.create</Text> 和 <Text code>getFieldDecorator</Text>
            ，自己定义校验的时机和内容。
          </Paragraph>
          <Paragraph>
            <ul>
              <li>
                validateStatus: 校验状态，可选 'success', 'warning', 'error',
                'validating'。
              </li>
              <li>hasFeedback：用于给输入框添加反馈图标。</li>
              <li>help</li>
            </ul>
          </Paragraph>
          <CompleteDemo />
        </Col>
        <Col span={12}>
          <Title level={4}>动态校验规则</Title>
          <ManualSetValue />
        </Col>
      </Row>
      <Row gutter={40}>
        <Col span={12}>
          <Title level={4}>自定义校验</Title>
          <OtherItemsForm />
        </Col>
      </Row>
    </Fragment>
  );
};
