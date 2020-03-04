import React, { Fragment, useState } from 'react';
import { Row, Col, Typography, Progress, Button, Tooltip } from 'antd';

import './progress.less';

const { Title, Paragraph } = Typography;

export default () => {
    const [progressVal, setProgressVal] = useState(0);
    return (
        <Fragment>
            <Row>
                <Col lg={16} xs={24}>
                    <Title level={3} editable>Progress 进度条</Title>
                    <Title level={4} >何时使用</Title>
                    <Paragraph>
                        在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
                    </Paragraph>
                    <Paragraph>
                        <ul>
                            <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；</li>
                            <li>当需要显示一个操作完成的百分比时。</li>
                        </ul>
                    </Paragraph>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" gutter={40} style={{ paddingLeft: "40px" }}
                style={{ marginTop: 60 }}>
                <Col span={8}>
                    <Progress percent={40} size="small" />
                    <Progress percent={50} status="exception" />
                    <Progress percent={60} status="success" />
                    <Progress percent={70} showInfo={false} />
                </Col>
                <Col span={8}>
                    <Progress type="circle" percent={35} status="active" />
                    <Progress type="circle" percent={98} status="success" />
                    <Progress type="circle" percent={15} status="exception" width={200} size="small" />
                </Col>
            </Row>
            <Row type="flex" justify="space-around" gutter={40} style={{ paddingLeft: "40px" }}
                style={{ marginTop: 60 }}>
                <Col span={8}>
                    <Progress percent={progressVal} format={(percent, successPercent) => (
                        `还剩${100 - percent}就完成啦!`
                    )} />
                    {/* <Progress percent={progressVal} type="dashboard" /> */}
                    <Progress percent={progressVal} type="circle" strokeColor="grey" strokeLinecap="butt" />
                    <Button.Group>
                        <Button disabled={progressVal === 0} onClick={() => {
                            if (progressVal > 0) {
                                setProgressVal(Math.max(progressVal - 23, 0))
                            };
                        }}>-</Button>
                        <Button disabled={progressVal === 100} onClick={() => {
                            if (progressVal < 100) {
                                setProgressVal(Math.min(progressVal + 23, 100))
                            };
                        }}>+</Button>
                    </Button.Group>
                </Col>
                <Col span={8}>
                    <Tooltip title="3 done / 3 in progress / 4 to do">
                        <Progress percent={60} successPercent={30} />
                    </Tooltip>
                    <Progress percent={99.9} strokeColor={{
                        '0%': 'orange',
                        '100%': 'red',
                    }} />
                </Col>
            </Row>
        </Fragment>
    );
}