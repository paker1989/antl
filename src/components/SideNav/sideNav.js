import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

import { getFullPath } from "../../helper/routeHelper";

import "./sideNav.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default ({ navData, ...menuProps }) => {
  console.log(navData);
  return (
    <Sider
      className="app-sider"
      width={300}
      collapsedWidth="80"
      collapsible
      defaultCollapsed={false}
      breakpoint="lg"
      // theme="light"
    >
      <Menu mode="inline" {...menuProps}>
        {Array.isArray(navData) ? (
          navData.map(item => {
            return (
              <SubMenu title={item.title} key={item.title}>
                {item.group_detail.map(group => {
                  return (
                    <Menu.ItemGroup key={group.title} title={group.title}>
                      {group.items.map(mnItem => {
                        return (
                          <Menu.Item key={mnItem.title}>
                            <NavLink to={getFullPath("comp", mnItem.link)}>
                              {mnItem.title}
                            </NavLink>
                          </Menu.Item>
                        );
                      })}
                    </Menu.ItemGroup>
                  );
                })}
              </SubMenu>
            );
          })
        ) : (
          <SubMenu title={navData.title} key={navData.title}>
            {navData.items.map(mnItem => (
              <Menu.Item key={mnItem.title}>
                <NavLink to={getFullPath("animate", mnItem.link)}>
                  {mnItem.title}
                </NavLink>
              </Menu.Item>
            ))}
          </SubMenu>
        )}
      </Menu>
    </Sider>
  );
};
