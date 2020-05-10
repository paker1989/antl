import React, { useState, useMemo, useCallback } from "react";
import { Table, Button, Row, Col, Divider } from "antd";
import { TweenOneGroup } from "rc-tween-one";

import "./addList.less";

const TableContext = React.createContext(false);

const dataProps = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

export default () => {
  const [isPageTween, setIsPageTween] = useState(false);
  const [data, setData] = useState(dataProps);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a href="#anchor" onClick={(e) => handleDelete(e, record)}>
            Delete
          </a>
        </span>
      ),
    },
  ];

  const handlePageChange = () => {
    setIsPageTween(true);
  };

  const handleDelete = (e, record) => {
    // e.preventDefault();
    const newData = data.filter((item) => item.key !== record.key);
    setData(newData);
    setIsPageTween(false);
  };

  const handleAdd = () => {
    data.unshift({
      key: Date.now(),
      name: dataProps[Math.round(Math.random() * (dataProps.length - 1))].name,
      age: Math.round(Math.random() * 90),
      address:
        dataProps[Math.round(Math.random() * (dataProps.length - 1))].address,
    });
    setData([...data]);
    setIsPageTween(false);
  };

  const onEnd = (e) => {
    const dom = e.target;
    dom.style.height = "auto";
  };

  const enterAnim = [
    {
      opacity: 0,
      x: 30,
      backgroundColor: "#fffeee",
      duration: 0,
    },
    {
      height: 0,
      duration: 200,
      type: 'from',
      delay: 250,
      ease: 'easeOutQuad',
      onComplete: onEnd,
    },
    {
      opacity: 1,
      x: 0,
      duration: 250,
      ease: "easeOutQuad",
    },
    { delay: 1000, backgroundColor: "#fff" },
  ];

  const pageEnterAnim = [
    {
      opacity: 0,
      duration: 0,
    },
    {
      height: 0,
      duration: 150,
      type: "from",
      delay: 150,
      ease: "easeOutQuad",
      onComplete: onEnd,
    },
    {
      opacity: 1,
      duration: 150,
      ease: "easeOutQuad",
    },
  ];
  const leaveAnim = [
    { duration: 250, opacity: 0 },
    { height: 0, duration: 200, ease: 'easeOutQuad' },
  ];
  const pageLeaveAnim = [
    { duration: 250, opacity: 0 },
    { height: 0, duration: 200, ease: "easeOutQuad" },
  ];

  const animateTbody = useCallback((props) => {
    console.log(props);

    return (
      <TableContext.Consumer>
        {(isPageTween) => {
          console.log(isPageTween);
          return (
            <TweenOneGroup
              component="tbody"
              className="tween-one-group-tbody"
              enter={isPageTween ? pageEnterAnim : enterAnim}
              leave={isPageTween ? pageLeaveAnim : leaveAnim}
              exclusive
              appear={false}
              {...props}
            />
          );
        }}
      </TableContext.Consumer>
    );
  }, []);
  return (
    <Row>
      <Col offset={4} span={16}>
        <div className="demo-container">
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
          <Divider />
          <TableContext.Provider value={isPageTween}>
            <Table
              className="table-enter-leave-demo-table"
              pagination={{ pageSize: 4 }}
              bordered
              bodyStyle={{ backgroundColor: "#fff" }}
              dataSource={data}
              columns={columns}
              onChange={handlePageChange}
              components={{ body: { wrapper: animateTbody } }}
            />
          </TableContext.Provider>
        </div>
      </Col>
    </Row>
  );
};
