import React from "react";

import { Form, Input, Select, Button, Checkbox } from "antd";

const { Option } = Select;

const Demo = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields();
  };
  const isNoteRequired = form.getFieldValue("noteRequired");

  return (
    <Form
      labelCol={{ xs: 24, sm: 8 }}
      wrapperCol={{ xs: 24, sm: 12 }}
      onSubmit={handleSubmit}
    >
      <Form.Item label="Note">
        {getFieldDecorator("note", {
          rules: [
            { required: isNoteRequired, message: "Please write your note." }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Gender">
        {getFieldDecorator("gender", {
          type: "array",
          rules: [{ required: true, message: "Please write your note." }]
        })(
          <Select
            onChange={value => {
              form.setFieldsValue({
                note: value === "m" ? "welcome Sir" : "welcome Madame"
              });
            }}
          >
            <Option value="m">Male</Option>
            <Option value="f">Female</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item wrapperCol={{ sm: { offset: 8 } }}>
        {getFieldDecorator("noteRequired", {
          valuePropName: "checked",
          initialValue: false
        })(<Checkbox>Note is required</Checkbox>)}
      </Form.Item>
      <Form.Item wrapperCol={{ sm: { offset: 8 } }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedDemo = Form.create({ name: "manual_setvalue_form" })(Demo);

export default WrappedDemo;
