import React, { useState } from 'react';
import { Collapse, Icon, Divider, Switch } from 'antd';

import './collapse.less';

const { Panel } = Collapse;


export default () => {

    const [bordered, setBordered] = useState(true);

    const customPanelStyle = {
        background: '#f7f7f7',
        borderRadius: 4,
        marginBottom: 24,
        border: 0,
        overflow: 'hidden',
      };

    return (
        <div className="demo-collapse">
            <h1 className="demo-title">Collapse 折叠面板</h1>
            <div className="demo-wrapper">
                <h1 className="demo-title sm">Collapse 折叠面板</h1>
                <Collapse
                    defaultActiveKey={["p1"]}
                    style={{ width: 500 }}
                >
                    <Panel
                        key="p1"
                        header={<span>
                            <Icon type="sinppets" />
                            <span>First Panel</span>
                        </span>}
                    >
                        <p>This is demo Collapse</p>
                    </Panel>
                    <Panel key="p2" disabled header="Disabled panel">
                        <p>This is disabled Collapse</p>
                    </Panel>
                </Collapse>
            </div>
            <div className="demo-wrapper">
                <h1 className="demo-title sm">每次只能打开一个: Accordion</h1>
                <Collapse
                    accordion
                    defaultActiveKey={["p2"]}
                    style={{ width: 500 }}
                    bordered={bordered}
                    expandIconPosition="right"
                    expandIcon={({ isActive, disabled }) => {
                        return disabled ? <Icon type="question-circle" /> :
                            <Icon type="logout" rotate={isActive ? 90 : 0} />
                    }}
                >
                    <Panel
                        key="p1"
                        header={<span>
                            <Icon type="sinppets" />
                            <span>First Panel</span>
                        </span>}
                    >
                        <p>This is demo Collapse</p>
                    </Panel>
                    <Panel key="p2" header="second panel">
                        <p>This is second Collapse</p>
                    </Panel>
                    <Panel key="p3" header="折叠 panel" >
                        <Collapse defaultActiveKey={["p3-2"]}>
                            <Panel key="p3-1" header="Sub panel 1">Sub panel in p3</Panel>
                            <Panel key="p3-2" header="Sub panel 2">Sub panel in p3</Panel>
                        </Collapse>
                    </Panel>
                    <Panel key="p4" header="disabled panel" disabled>
                        <p>This is disabled Collapse</p>
                    </Panel>
                    <Panel key="p5" header="风格化 panel" style={customPanelStyle}
                      extra={
                      <span onMouseDown={(e) => {e.preventDefault();}}>
                          <Icon type="edit"/>
                          </span>
                          }
                    >
                        <p>This is customized style Collapse</p>
                    </Panel>
                </Collapse>
                <Divider dashed style={{ width: 300 }} />
                <Switch
                    checked={bordered}
                    checkedChildren="有边框"
                    unCheckedChildren="无边框"
                    onChange={(checked) => setBordered(checked)}
                />
            </div>
        </div>

    );
}