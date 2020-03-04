import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'antd';

import './modal.less';

// const { Title, Text, Paragraph } = Typography;

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <Fragment>
            <Button type="primary" onClick={() => {
                setVisible(!visible);
            }}>Open Modal</Button>
            <Modal
                centered
                title="Title over here"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Fragment>

    );
}