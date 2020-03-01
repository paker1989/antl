import React, { Fragment } from "react";
import { Typography, Table, Tag } from "antd";
import "./table.less";
// import Column from "antd/lib/table/Column";

const { Title, Paragraph } = Typography;
const { ColumnGroup, Column } = Table;

export default () => {
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"]
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"]
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"]
    }
  ];
  return (
    <Fragment>
      <Title level={3}>JSX风格的API</Title>
      <Paragraph>
        这个只是一个描述 <span className="demo-code">columns</span>
        的语法糖，所以你不能用其他组件去包裹
        <span className="demo-code">Column</span> 和
        <span className="demo-code">ColumnGroup</span>.
      </Paragraph>
      <Table dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First name" dataIndex="firstName" key="fname" />
          <Column title="Last name" dataIndex="lastName" key="lname" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <span>
              {tags.map((item, index) => (
                <Tag color="blue" key={`tag-${index}`}>
                  {item}
                </Tag>
              ))}
            </span>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <span>
              <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
              <a>Delete</a>
            </span>
          )}
        />
      </Table>
    </Fragment>
  );
};
