import React from 'react';
import { Menu, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';


export default () => {
    return (
        <div className="demo-menu">
            <h1 className="demo-title">Menu 导航菜单</h1>
            <div className="demo-wrapper">
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item>
                        <Icon type="mail" />
                        <span>Mail me</span>
                    </Menu.Item>
                    <Menu.Item disabled>
                        <Icon type="setting" />
                        <span>To be supported</span>
                    </Menu.Item>
                    <SubMenu title={
                        <div>
                            <Icon type="setting" />
                            <span>Navigation Three</span>
                        </div>
                    }>
                        <Menu.Item>
                            <Icon type="mail" />
                            <span>Mail me</span>
                        </Menu.Item>
                        <Menu.Item>
                            <Icon type="setting" />
                            <span>To be supported</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
            <div className="demo-wrapper">
                <Menu 
                mode="vertical" 
                style={{ width: 256}} >
                    <Menu.Item>Option 1</Menu.Item>
                    <Menu.Item>Option 2</Menu.Item>
                    <SubMenu title={
                        <span>
                            <Icon type="user" />
                            <span>User center</span>
                        </span>
                    }>
                        <Menu.Item>Option 1</Menu.Item>
                        <Menu.Item>Option 2</Menu.Item>
                    </SubMenu>
                    <SubMenu title={
                        <span>
                            <Icon type="mail" />
                            <span>Mail center</span>
                        </span>
                    }>
                        <Menu.Item>Option 1</Menu.Item>
                        <Menu.Item>Option 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>

    )
}