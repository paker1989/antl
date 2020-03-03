import React, { Fragment, useState } from "react";
import {
    Typography,
    Tabs,
    Button,
    Icon,
    Divider,
    Radio
} from "antd";

import TabContainer from './tab.container';
import TabSticky from './tab.sticky';

import "./tab.less";

const { Title } = Typography;
const { TabPane } = Tabs;

export default () => {
    const [layout, setLayout] = useState('top');
    const [type, setType] = useState('line');
    return (
        <Fragment>
            <Title level={3}>Tab标签页</Title>
            <Radio.Group
                onChange={e => setLayout(e.target.value)}
                value={layout}
                style={{ marginBottom: 30, display: 'block' }}
            >
                <Radio.Button value="top">Horizontal</Radio.Button>
                <Radio.Button value="left">Vertical</Radio.Button>
            </Radio.Group>
            <Radio.Group onChange={e => setType(e.target.value)} value={type} style={{ marginBottom: 30 }}>
                <Radio.Button value="line">Line</Radio.Button>
                <Radio.Button value="card">Card</Radio.Button>
                <Radio.Button value="editable-card">Editable card</Radio.Button>
            </Radio.Group>
            <Tabs
                defaultActiveKey="description"
                tabPosition={layout}
                style={{ height: 200, width: 900 }}
                tabBarExtraContent={[
                    <Button>Extra Action</Button>
                ]}
                type={type}
            >
                <TabPane key="overview" tab="overview">
                    content of overview
                </TabPane>
                <TabPane key="description" tab="description">
                    content of description
                </TabPane>
                <TabPane key="forbidden" tab="forbidden" disabled>
                    forbidden
                </TabPane>
                <TabPane key="withIcon" tab={
                    <span>
                        <Icon type="apple" />
                        With icon
                    </span>
                }>
                    with icon
                </TabPane>
            </Tabs>
            <Divider orientation="left" style={{ fontSize: 13 }}>使用 react-sticky 组件实现吸顶效果</Divider>
            <TabSticky />
            <Divider orientation="left" style={{ fontSize: 13 }}>容器部署，附加额外样式覆盖</Divider>
            <div style={{ background: '#7dbcea', padding: '20px' }}>
                <TabContainer />
            </div>

        </Fragment>
    );
};
