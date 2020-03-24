import React, { Fragment, useState } from "react";
import { Typography, Table } from "antd";
import "./table.less";

const { Title } = Typography;

export default () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const rowSelections = {
    selectedRowKeys: selectedKeys,
    onChange: selectedRowKeys => setSelectedKeys(selectedRowKeys),
    type: "checkbox",
    selections: [
      // Table.SELECTION_ALL,
      // Table.SELECTION_INVERT,
      {
        key: "middleAge",
        text: "大爷(大于30岁)",
        onSelect: changebleRowKeys => {
          let filteredKeys = changebleRowKeys.filter((key, index) => {
            // console.log(key);
            const item = dataSource.find(data => data.key === key);
            // console.log(item);
            return item.age > 30;
          });
          setSelectedKeys(filteredKeys);
        }
      },
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        }
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: changableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        }
      }
    ]
  };

  const dataSource = [];
  for (let i = 0; i < 46; i++) {
    dataSource.push({
      key: i,
      name: `Edward King ${i}`,
      age: i + 12,
      address: `London, Park Lane no. ${i}`
    });
  }

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
      <Title level={3}>selection</Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{ ...rowSelections }}
      />
    </Fragment>
  );
};
