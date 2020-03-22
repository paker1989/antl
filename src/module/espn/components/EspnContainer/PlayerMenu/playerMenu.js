import React from "react";
import { Row, Col, Menu } from "antd";
import { StickyContainer, Sticky } from "react-sticky";

import "./playerMenu.less";

const { Item, SubMenu } = Menu;

export default ({ menuProps }) => {
  const RenderRootMenu = data => {
    return (
      <Menu mode="horizontal">
        {data.map(item => {
          if (item.children) {
            return (
              <SubMenu title={item.title} key={item.key}>
                {item.children.map(child => (
                  <Item key={child.key}>
                    <a href={child.link}>{child.title}</a>
                  </Item>
                ))}
              </SubMenu>
            );
          } else {
            return (
              <Item key={item.key}>
                <a href={item.link}>{item.title}</a>
              </Item>
            );
          }
        })}
      </Menu>
    );
  };

  return (
    <Sticky bottomOffset={40}>
      {({ style }) => (
        <Row className="player-menu-row" style={{ ...style, zIndex: 1 }}>
          <Col span={24}>{RenderRootMenu(menuProps)}</Col>
        </Row>
      )}
    </Sticky>
    // <Row className="player-menu-row">
    //   <Col span={24}>{RenderRootMenu(menuProps)}</Col>
    // </Row>
  );
};
