import React, { Fragment } from 'react';
import { Typography, Row, Col } from 'antd';
import ModalBasic from './modal.basic';
import ModalAsync from './modal.async';
import ModalFooter from './modal.cust.footer';
import ModalConfirm from './modal.confirm';
import ModalCountDown from './modal.countdown';

import './modal.less';

const { Title, Text, Paragraph } = Typography;

export default () => {
    return (
        <Fragment>
            <Row>
                <Col lg={16} xs={24}>
                    <Title level={3} editable>Modal 对话框</Title>
                    <Title level={4} >何时使用</Title>
                    <Paragraph>
                        需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <Text code>Modal</Text> 在当前页面正中打开一个浮层，承载相应的操作。
                        另外当需要一个简洁的确认框询问用户时，可以使用 <Text code>Modal.confirm()</Text>等语法糖方法。
                    </Paragraph>
                </Col>
            </Row>
            <Row type="flex" justify="space-around" gutter={40} style={{ paddingLeft: "40px" }}>
                <ModalBasic />
                <ModalAsync />
                <ModalFooter />
                <ModalConfirm />
                <ModalCountDown />
            </Row>
        </Fragment>

    );
}