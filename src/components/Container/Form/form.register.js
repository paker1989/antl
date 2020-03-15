import React from "react";
import { Form, Input, Icon, Button, Checkbox } from "antd";

import "./form.less";

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }

const NormalRegisterForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    console.log("submit");
    e.preventDefault();
    console.log(form);
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="normal-register">
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [
            {
              required: true,
              message: "Please input your username!"
            }
          ]
        })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item>
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
        {getFieldDecorator("remember", {
          valuePropName: "checked",
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <a className="login-form-forgot">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="#">register now!</a>
      </Form.Item>
    </Form>
  );
};

const WrappedForm = Form.create({ name: "normal_register" })(
  NormalRegisterForm
);

export default WrappedForm;
