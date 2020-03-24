import React, { Fragment, useState } from "react";
import {
  Typography,
  Popconfirm,
  Row,
  Col,
  Icon,
  message,
  Card,
  Switch
} from "antd";
import "./notification.less";

const { Title } = Typography;

export default () => {
  const [visible, setVisible] = useState(false);
  const [condition, setCondition] = useState(false);

  function confirm(e) {
    message.success("Click on Yes");
  }

  function cancel(e) {
    message.error("Click on No");
  }

  const handleVisibleChange = visible => {
    console.log(visible);
    if (!visible) {
      setVisible(visible);
      return;
    }
    if (condition) {
      message.info("there is condition");
      return;
    } else {
      setVisible(visible);
    }
  };

  return (
    <Fragment>
      <Title level={2}>Popconfirm 气泡确认框</Title>
      <Row type="flex" justify="center" gutter={80}>
        <Col xs={24} lg={12}>
          <Card>
            <Popconfirm
              title="Are you going to delete it?"
              okText="Confirm"
              cancelText="Cancel"
              icon={<Icon type="smile" theme="twoTone" />}
              onConfirm={confirm}
              onCancel={cancel}
              placement="bottom"
            >
              <a href="https://google.com">Delete</a>
            </Popconfirm>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card
            actions={[
              <Switch
                defaultChecked={condition}
                checkedChildren="有condition"
                unCheckedChildren="无condition"
                onChange={checked => {
                  setCondition(checked);
                }}
              />
            ]}
          >
            <Popconfirm
              title="Are you going to delete it?"
              okText="Confirm"
              cancelText="Cancel"
              icon={<Icon type="smile" theme="twoTone" />}
              onConfirm={confirm}
              onCancel={cancel}
              placement="bottom"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <a href="https://google.com">Delete</a>
            </Popconfirm>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
