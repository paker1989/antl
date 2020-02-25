import React, { useState } from "react";
import { Card, Icon } from 'antd';

import './card.less';

export default () => {
    const [key, setKey] = useState("article");

    const contentListNoTitle = {
        article: <p>article content</p>,
        app: <p>app content</p>,
        project: <p>project content</p>,
    };

    const tabList = [
        {
            key: 'article',
            tab: 'article',
        },
        {
            key: 'app',
            tab: 'app',
        },
        {
            key: 'project',
            tab: 'project',
        },
    ]

    return (
        <Card
            style={{ width: '100%' }}
            title="Card title"
            extra={<a href="#">More</a>}
            activeTabKey={key}
            tabList={tabList}
            onTabChange={(key) => { setKey(key) }}
            tabBarExtraContent={
             <div>
                <span>Extra move</span>
                <Icon type="pic-right"/>
            </div>
            }
        >
            {contentListNoTitle[key]}
        </Card>
    );
}