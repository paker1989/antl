import React, { Fragment } from 'react';
import { Typography, Anchor } from 'antd';

import './anchor.less';

const { Title } = Typography;
const { Link } = Anchor;

export default () => {
    return (
        <Fragment>
            <Title level={3}>Anchor 锚点</Title>
            <Anchor>
                <Link href="#components-anchor-demo-basic" title="Basic demo" />
                <Link href="#components-anchor-demo-static" title="Static demo" />
                <Link href="#components-anchor-demo-basic" title="Basic demo with Target" target="_blank" />
                <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
            </Anchor>
            <div id="components-anchor-demo-basic" className="anchor-div">
            </div>
            <div id="components-anchor-demo-static" className="anchor-div">
            </div>
            <div id="components-anchor-demo-static" className="anchor-div">
            </div>
            <div>
                <div id="Anchor-Props"  className="anchor-div" >
                Anchor-Props
                </div>
                <div id="Link-Props" className="anchor-div">
                Link-Props
                </div>
            </div>
        </Fragment>


    );
}