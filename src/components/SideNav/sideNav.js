import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import NavData from '../../assets/navData';

import { getFullPath } from '../../helper/routeHelper';

import './sideNav.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default () => {
    return (
        <Sider
            className="app-sider"
            width={256}
            collapsedWidth="80"
            collapsible
            defaultCollapsed={false}
            breakpoint="lg"
            // theme="light"
        >
            <Menu mode="inline" defaultOpenKeys={["组件"]} defaultSelectedKeys={["Menu"]}>
                {
                    NavData.map(item => {
                        if (item.type === 'group') {
                            return (
                                <SubMenu title={item.title} key={item.title}>
                                    {
                                        item.group_detail.map(group => {
                                            return (
                                                <Menu.ItemGroup key={group.title} title={group.title}>
                                                    {group.items.map(mnItem => {
                                                        return (
                                                            <Menu.Item key={mnItem.title}>
                                                                <NavLink to={getFullPath(mnItem.link)}>{mnItem.title}</NavLink>
                                                            </Menu.Item>
                                                        )
                                                    })}
                                                </Menu.ItemGroup>
                                            )
                                        })
                                    }
                                </SubMenu>
                            );
                        } else {
                            return null; // to do
                        }

                    })
                }
            </Menu>
        </Sider>
    );
}