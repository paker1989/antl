import React, { useState } from 'react';
import { Comment, Icon, Avatar, Rate } from 'antd';

import './comment.less';


export default () => {
    const [currentRate, setCurrentRate] = useState(2);
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const replyTo = (
        <Comment
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            author="xinxiu"
            content={<p>乃以组特</p>}
            datetime="2019年3月20日，下午3点22"
            actions={[
                (<Icon type="edit" />),
                (<Icon type="delete" />)
            ]}
        />
    )
    return (
        <div className="demo-comment">
            <h1 className="demo-title">Comment 评论, Rate</h1>
            <div className="demo-wrapper">
                <Comment
                    className="demo-comment"
                    children={replyTo}
                    avatar={
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            alt="Han Solo"
                        />
                    }
                    actions={[
                        (<Icon type="edit" />),
                        (<Icon type="delete" />),
                        (<Rate 
                            // allowHalf
                            //  defaultValue={2.5} 
                            character={<Icon type="heart"/>}
                            tooltips={desc}
                            value={currentRate}
                            onChange={(val) => {
                                console.log(val);
                                setCurrentRate(val);
                            }} />),
                        (desc[currentRate - 1] ? desc[currentRate - 1] : null)

                    ]}
                    content={<section>
                        We supply a series of design principles, practical patterns
                        and high quality design resources (Sketch and Axure), to help
                         people create their product prototypes beautifully and efficiently.
                    </section>}
                    datetime="2019年3月20日，下午3点22"
                />
            </div>
        </div>
    )
}