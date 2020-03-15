import React, { Fragment } from 'react';
import { Modal, Button, Icon } from 'antd';

import './modal.less';

const { info } = Modal;

export default () => {
    return (
        <Fragment>
            <Button type="primary" onClick={() => {
                let counter = 5;
                let timer;

                const modal = info({
                    title: 'Count down Modal',
                    content: `Your modal will be closed in ${counter}s`,
                    icon: <Icon type="heart" theme="twoTone" />,
                    okType: "dashed",
                    okText: 'Confirm',
                    okButtonProps: {
                        onClick: () => {
                            console.log('click on ok');
                            if (timer) {
                                clearInterval(timer);
                            }
                            modal.destroy();
                        }
                    }
                });

                timer = setInterval(() => {
                    if (timer !== null && counter === 0) {
                        clearInterval(timer);
                        modal.destroy();
                    }
                    counter--;
                    modal.update({
                        content: `Your modal will be closed in ${counter}s`
                    })
                }, 1000);

            }}>Open Modal to close in 5s</Button>
        </Fragment>

    );
}