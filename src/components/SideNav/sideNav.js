import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

import { getFullPath } from "../../helper/routeHelper";

import "./sideNav.less";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default ({ navData, ...menuProps }) => {
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
        {navData.map(item => {
          if (item.type === "group") {
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
          } else {
            return (
              // <Menu.Item key={item.title}>
              //   <NavLink to={getFullPath("comp", item.link)}>
              //     {item.title}
              //   </NavLink>
              // </Menu.Item>
              null
            ); // to do
          }
        })}
      </Menu>
    </Sider>
  );
};
