import React, { useState } from 'react';
import { Dropdown, Button, Menu, Icon, message, Checkbox, Divider, Row, Col } from 'antd';

import './formComponent.less';
import CheckboxGroup from 'antd/lib/checkbox/Group';

export default () => {
    const [allChecked, setAllChecked] = useState(false);
    const [allCheckList, setAllCheckList] = useState(['or']);

    const onClick = ({ key }) => {
        message.info(`you clicked on ${key}`);
    }

    const menu = (
        <Menu defaultSelectedKeys={["item1"]} onClick={onClick}>
            <Menu.Item key="item1">Option 1</Menu.Item>
            <Menu.Item key="item2">Option 2</Menu.Item>
            <Menu.Item key="item2"><Icon type="plus-circle" />You are apple of my eye</Menu.Item>
        </Menu>
    );

    return (
        <div className="demo-FormComponent">
            <h1 className="demo-title">Form 表单组件</h1>
            <div className="demo-wrapper">
                <h1 className="demo-title sm">Dropdown</h1>
                <div className="demo-wrapper">
                    <h1 className="demo-title sm">Basic</h1>
                    <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
                        <Button type="dashed">Click me (Bottom right)</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topCenter" trigger={["hover"]}>
                        <Button type="dashed">Hover me (Top center)</Button>
                    </Dropdown>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Hover me <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                <div className="demo-wrapper">
                    <h1 className="demo-title sm">Dropdown.button</h1>
                    <Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
                        User button
                     </Dropdown.Button>
                    <Dropdown.Button
                        placement="bottomRight"
                        overlay={menu}
                        icon={<Icon type="user" />}
                    >
                        Bottom right
                     </Dropdown.Button>
                    <Dropdown.Button overlay={menu} icon={<Icon type="user" />} disabled>
                        Disabled
                     </Dropdown.Button>
                    <Dropdown.Button
                        placement="bottomRight"
                        overlay={menu}
                        icon={<Icon type="user" />}
                        onClick={(evt) => {
                            message.info("evt");
                        }}
                    >
                        Click event
                     </Dropdown.Button>
                    <Dropdown.Button trigger={['hover']} type="ghost">
                        Just a hover button
                     </Dropdown.Button>
                </div>
            </div>{/* END Dropdown */}
            <div className="demo-wrapper">
                <h1 className="demo-title sm">Checkbox</h1>
                <div className="demo-wrapper">
                    <h1 className="demo-title sm">Basic</h1>
                    <Checkbox onChange={(evt) => { console.log(evt) }}>
                        Checkbox
                    </Checkbox>
                    <Checkbox onChange={(evt) => { console.log(evt) }} defaultChecked={true}>
                        default checked
                    </Checkbox>
                    <Checkbox onChange={(evt) => { console.log(evt) }} disabled>
                        disabled
                    </Checkbox>
                </div>
                <div className="demo-wrapper">
                    <h1 className="demo-title sm">Check all</h1>
                    <div className="demo-wrapper">
                        <Checkbox checked={allChecked} onChange={(evt) => {
                            console.log('handle');
                            console.log()
                            if (allChecked) {
                                console.log('handle uncheck');
                                setAllChecked(false);
                                setAllCheckList([]);
                            } else {
                                console.log('check all')
                                setAllChecked(true);
                                setAllCheckList(['or', 'gr'])
                            }
                        }}>Check all</Checkbox>
                        <Divider></Divider>
                        <CheckboxGroup
                            options={[
                                { label: 'orange', value: 'or' },
                                { label: 'green', value: 'gr' },

                            ]}
                            value={allCheckList}
                        />
                    </div>
                </div>
                <div className="demo-wrapper">
                    <h1 className="demo-title sm">Checkbox with grid</h1>
                    <div className="demo-wrapper">
                        <CheckboxGroup style={{width: "100%"}}>
                            <Row>
                                <Col lg={6} xs={12}>
                                    <Checkbox value="A">A</Checkbox>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <Checkbox value="B">B</Checkbox>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <Checkbox value="C">C</Checkbox>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <Checkbox value="D">D</Checkbox>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <Checkbox value="E">E</Checkbox>
                                </Col>
                            </Row>
                        </CheckboxGroup>

                    </div>
                </div>
            </div> {/* END Checkbox */}
        </div>

    )
}