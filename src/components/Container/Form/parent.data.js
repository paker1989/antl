import React from "react";
import { Form, Input } from "antd";

const CustomizedForm = Form.create({
  name: "global_state",
  onFieldsChange(props, changedFields) {
    // console.log("=====onFieldsChange===");
    // console.log(props);
    // console.log(changedFields);
    // console.log("=========end onFieldsChange");
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value
      })
    };
  },
  onValuesChange(_, values) {
    // console.log("=====onValuesChange===");
    // console.log(_);
    // console.log(values);
    // console.log("=========end onValuesChange");
  }
})(props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <Form.Item label="Username">
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Username is required!" }]
        })(<Input />)}
      </Form.Item>
    </Form>
  );
});

export default class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: "benjycui"
      }
    }
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        <CustomizedForm {...fields} onChange={this.handleFormChange} />
        <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
      </div>
    );
  }
}
