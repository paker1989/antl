import React, { useEffect } from "react";
import { Form, Input, Icon, Button } from "antd";

import "./form.less";

// const { Title, Text, Paragraph } = Typography;
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const HorizontalLoginForm = ({ form }) => {
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = form;

  useEffect(() => {
    form.validateFields();
  }, [form]);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item
        validateStatus={usernameError ? "error" : ""}
        help={usernameError || ""}
      >
        {getFieldDecorator("username", {
          rules: [
            {
              required: true,
              message: "Please input your username!"
            }
          ]
        })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item
        validateStatus={passwordError ? "error" : ""}
        help={passwordError || ""}
      >
        {getFieldDecorator("password", {
          rules: [
            {
              required: true,
              message: "Please input your password!"
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock" />}
            placeholder="Password"
            type="password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedForm = Form.create({ name: "horizontal_login" })(
  HorizontalLoginForm
);

export default WrappedForm;
