import React, { Fragment, useEffect, useState } from "react";
import { Typography, Row, Col, Form, Input, Icon, Button, Tooltip } from "antd";

import "./form.less";
let id = 0;

const AddFieldForm = ({ form }) => {
//   const [data, setData] = useState([]);

  const {
    getFieldDecorator,
    getFieldValue
  } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const formLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 }
    }
  };

  const addField = () => {
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    });
  };

  getFieldDecorator("keys", { initialValue: [] });
  const keys = getFieldValue("keys");

  const data = keys.map((key, index) => (
    <Form.Item
      key={key}
      label={
        <span>
          <Tooltip title="New passenger information">
            {`Passenger ${key + 1}`}
          </Tooltip>
        </span>
      }
    >
      {getFieldDecorator(`passenger-${key}`, {
        rules: [
          {
            required: true,
            message: "Please input passenger name",
            whitespace: true
          }
        ]
      })(<Input />)}
    </Form.Item>
  ));

  return (
    <Fragment>
      <Form {...formLayout} onSubmit={handleSubmit} className="add-field-form">
        <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
          <Button type="dashed" style={{ width: "100%" }} onClick={addField}>
            <span>
              <Icon type="plus" />
              Add field
            </span>
          </Button>
        </Form.Item>
        {data}
        <Form.Item
          wrapperCol={{
            span: 8,
            offset: 8
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

const WrappedForm = Form.create({ name: "addField_form" })(AddFieldForm);

export default WrappedForm;
