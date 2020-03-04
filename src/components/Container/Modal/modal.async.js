import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'antd';

import './modal.less';

// const { Title, Text, Paragraph } = Typography;

export default () => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [content, setContent] = useState('click OK to asyncally close the modal.')
    return (
        <Fragment>
            <Button type="primary" onClick={() => {
                setVisible(!visible);
            }}>Open Modal with async logic</Button>
            <Modal
                title="Title over here"
                visible={visible}
                confirmLoading={confirmLoading}
                onOk={() => {
                    setContent('modal will be closed in 2s');
                    setConfirmLoading(true);
                    setTimeout(() => {
                        setVisible(false)
                    }, 2000)
                }}
                onCancel={() => setVisible(false)}
            >
                {content}
            </Modal>
        </Fragment>

    );
}