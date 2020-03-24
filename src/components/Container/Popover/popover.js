import React from 'react';
import { Card, Popover, Divider, Button, Icon } from 'antd';

import './popover.less';

export default () => {
  return (
    <div className="demo-popover">
      <h1 className="demo-title">Popover (subclass of Tooltip)</h1>
      <div className="demo-wrapper">
        <Card
          style={{width: 400}}
          actions={[
            <Icon type="edit" />,
            <Icon type="wechat"/>,
            <Icon type="delete"/>
          ]}
        >
          <div>
          <Popover 
          trigger="click"
          title="Popover title"
          placement="bottomRight"
          content={
           <div>
             <p>Content</p>
             <a href="https://google.com">close</a>
           </div>
          }
          >
            <Button type="primary">Click me</Button>
          </Popover>
          <Divider orientation="left" style={{fontSize: 12}}>基本用法</Divider>
          <Card.Meta 
           description="最简单的用法，浮层的大小由内容区域决定。"
          />
          </div>
      
        </Card>
      </div>
    </div>
  );
}