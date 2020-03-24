import React, { Fragment } from "react";
import { Result, Typography, Icon, Button, Divider } from "antd";
// import Paragraph from 'antd/lib/skeleton/Paragraph';

const { Title, Paragraph, Text } = Typography;

export default () => {
  return (
    <Fragment>
      <Title level={2}>Result 结果</Title>
      <Paragraph>用于反馈一系列操作任务的处理结果。</Paragraph>
      <Result
        title="恭喜你"
        subTitle="达成一万分成就"
        status="success"
        // status="error"
        icon={<Icon type="smile" />}
        extra={<Button type="primary">去分享</Button>}
      />
      <Divider dashed>下一个</Divider>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy">Buy Again</Button>
        ]}
      />
      <Divider dashed>复杂一些的例子</Divider>
      <Result
        // style={{ width: 700 }}
        title="Submission Failed"
        subTitle="Please check and modify the following information before resubmitting."
        status="error"
        // status="error"
        icon={<Icon type="close-circle" />}
        extra={[
          <Button type="primary" key="report">
            去报告
          </Button>,
          <Button key="return">返回</Button>
        ]}
      >
        <div>
          <Paragraph>
            <Text strong>
              The content you submitted has the following error:
            </Text>
          </Paragraph>
          <Paragraph>
            <Icon style={{ color: "red" }} type="close-circle" /> Your account
            has been frozen
            <a href="https://google.com">Thaw immediately &gt;</a>
            <Text code>close-circle</Text>
          </Paragraph>
          <Paragraph>
            <Icon style={{ color: "red" }} type="close-circle" /> Your account
            is not yet eligible to apply <a href="https://google.com">Apply Unlock &gt;</a>
          </Paragraph>
        </div>
      </Result>
    </Fragment>
  );
};
