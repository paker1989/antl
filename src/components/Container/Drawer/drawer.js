import React, { useState } from "react";
import { Button, Drawer } from "antd";

import DrawerProfile from './drawer.profile';
import "./drawer.less";

export default () => {
  const [visible, setVisible] = useState(false);
  const [curVisible, setCurVisible] = useState(false);
  return (
    <div className="demo-drawer">
      <h1 className="demo-title">Drawer 抽屉</h1>
      <div className="demo-wrapper">
        <Button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          打开下方抽屉
        </Button>
        <Drawer
          placement="bottom"
          closable={true}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <div className="section">
            <p>请接受当前网站的terms of use.</p>
            <Button type="primary">接受</Button>
          </div>
        </Drawer>
      </div>
      <div className="demo-wrapper">
        <h1 className="demo-title sm">自定义container</h1>
        <div className="container-class">
          <div style={{ marginTop: 16 }}>
            <Button
              type="primary"
              onClick={() => {
                setCurVisible(true);
              }}
            >
              Open
            </Button>
          </div>
          <Drawer
            placement="right"
            title="挂载到当前container"
            getContainer={false}
            visible={curVisible}
            onClose={() => {
              setCurVisible(false);
            }}
            style={{ position: "absolute" }}
          >
            <p>Some content...</p>
            <div className="footer">
              <Button style={{marginRight: 10}}>Cancel</Button>
              <Button type="primary">Submit</Button>
            </div>
          </Drawer>
        </div>
      </div>
      <div className="demo-wrapper" style={{width: 600}}>
       <DrawerProfile/>
      </div>
    </div>
  );
};
