import React from 'react';

import { Typography, Row, Col, Statistic, Button, Icon, Card, message } from 'antd';

import './statistic.less';

const { Title } = Typography;

export default () => {
    const deadline = Date.now() + 1000 * 10; 

    return (
        <div className="demo-statistic">
            <Title level={3}>Statistic</Title>
            <div className="demo-wrapper">
                <Row gutter={20}>
                    <Col span={12}>
                        <Row
                        // style={{ width: 400 }}
                        >
                            <Col span={12}>
                                <Statistic title="Active Users" value={112893} />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Account Balance (CNY)" value={112893} precision={2}
                                />
                                <Button type="primary" style={{ marginTop: 20 }}>Recharge</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row
                        // style={{ width: 400 }}
                        >
                            <Col span={12}>
                                <Statistic title="Feedback" value={1128} prefix={
                                    <Icon type="like" />
                                } />
                            </Col>
                            <Col span={12}>
                                <Statistic title="Unmerged" value="93" suffix="/100" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginTop: 20 }}>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.3}
                                precision={2}
                                valueStyle={{ color: '#cf1322' }}
                                prefix={<Icon type="arrow-down" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            {/* <Card.Meta title="Statistic.CountDown" description="基本用法"/> */}
                            <Statistic.Countdown
                              title="CountDown"
                              value={deadline}
                              onFinish={() => {
                                  message.success('count down finished');
                              }}
                            />
                        </Card>
                    </Col>
                </Row>


            </div>
        </div>
    );
}