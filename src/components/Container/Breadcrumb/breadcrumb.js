import React from 'react';
import { Breadcrumb, Menu, Icon } from 'antd';

import './breadcrumb.less';

export default () => {
    const menu = (
        <Menu defaultSelectedKeys={["item1"]}>
            <Menu.Item key="item1">Option 1</Menu.Item>
            <Menu.Item key="item2">Option 2</Menu.Item>
        </Menu>
    );

    return (
        <div className="demo-breadcrumb">
            <h1 className="demo-title">Breadcrumb</h1>
            <div className="demo-wrapper">
                <Breadcrumb separator=">">
                    <Breadcrumb.Item overlay={menu}>With overlay</Breadcrumb.Item>
                    <Breadcrumb.Item>Without overlay</Breadcrumb.Item>
                    <Breadcrumb.Item>Item 3</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="demo-wrapper">
            <Breadcrumb separator={<Icon type="swap-right"/>}>
                    <Breadcrumb.Item overlay={menu}>With overlay</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://www.zhihu.com">
                      <Icon type="mail" />
                      <span>With icon</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Item 3</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>

    )
}