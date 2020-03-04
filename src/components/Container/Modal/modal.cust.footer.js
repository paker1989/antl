import React, { Fragment, useState } from 'react';
import { Modal, Button, Icon } from 'antd';

import './modal.less';

// const { Title, Text, Paragraph } = Typography;

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <Fragment>
            <Button type="primary" onClick={() => {
                setVisible(!visible);
            }}>Open Modal with customized footer</Button>
            <Modal
                title="Title over here"
                visible={visible}
                footer={[
                    // <Icon type="close" theme="twoTone" onClick={() => setVisible(false)} />,
                    // <Icon type="cancel" onClick={() => setVisible(false)} />,
                    <Button key="back" onClick={() => setVisible(false)} >
                        Return
                  </Button>,
                    <Button key="submit" type="primary" onClick={() => setVisible(false)} >
                        Submit
                  </Button>,
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </Fragment>

    );
}