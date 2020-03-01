import React, { Fragment, useState } from "react";
import { Typography, Table } from "antd";
import "./table.less";

const { Title, Paragraph } = Typography;

export default () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const rowSelections = {
    selectedRowKeys: selectedKeys,
    onChange: (selectedRowKeys, selectedRow) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRow
      );
      setSelectedKeys(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      disabled: record.age > 40,
      name: record.name
    }),
    type: "checkbox"
  };

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];

  return (
    <Fragment>
      <Title level={3}>简单用法</Title>
      <Paragraph>
        指定表格的数据源 <span className="demo-code">dataSource</span>{" "}
        为一个数组。
      </Paragraph>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{ ...rowSelections }}
        bordered={false}
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    </Fragment>
  );
};
