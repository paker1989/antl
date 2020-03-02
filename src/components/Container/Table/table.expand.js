import React, { Fragment, useState } from "react";
import { Typography, Table, message, Icon } from "antd";
import "./table.less";

const { Title, Paragraph } = Typography;

export default () => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <div onClick={() => { message.error("can not delete") }}><Icon type="delete" /></div>,
        },
    ]

    const data = [
        {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            name: 'Not Expandable',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            description: 'This not expandable',
        },
        {
            key: 4,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black',
        },
    ];

    return (
        <Fragment>
            <Title level={3}>Expand</Title>
            <Paragraph>expandedRowRender</Paragraph>
            <Table
                dataSource={data}
                columns={columns}
                expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>} 
                // rowExpandable={false}
            />
        </Fragment>
    );
};
