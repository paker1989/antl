import React from "react";
import { Form, Input, Select, Cascader, DatePicker, InputNumber } from "antd";

const { Option } = Select;

const CompletForm = ({ form }) => {
  const { getFieldDecorator } = form;
  const formLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  return (
    <Form {...formLayout}>
      <Form.Item
        label="Fail:"
        validateStatus="validating"
        //    help="please enter the failed choice"
        hasFeedback
        extra="The information is being validated..."
      >
        {getFieldDecorator("failChoice", {
          //   rules: [{ required: true, message: "please enter the failed choice" }]
        })(<Input placeholder="unavailable choice" />)}
      </Form.Item>
      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Select defaultValue="1">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Cascader defaultValue={["1"]} options={[]} />
      </Form.Item>

      <Form.Item label="inline" style={{ marginBottom: 0 }}>
        <Form.Item
          validateStatus="error"
          help="Please select the correct date"
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
        >
          <DatePicker />
        </Form.Item>
        <span
          style={{
            display: "inline-block",
            width: "24px",
            textAlign: "center"
          }}
        >
          -
        </span>
        <Form.Item
          style={{ display: "inline-block", width: "calc(50% - 12px)" }}
        >
          <DatePicker />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success">
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success">
        <Input allowClear placeholder="with allowClear" />
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning">
        <Input.Password placeholder="with input password" />
      </Form.Item>

      <Form.Item label="Error" hasFeedback validateStatus="error">
        <Input.Password
          allowClear
          placeholder="with input password and allowClear"
        />
      </Form.Item>
    </Form>
  );
};

export default Form.create({
  name: "complete_form"
})(CompletForm);
