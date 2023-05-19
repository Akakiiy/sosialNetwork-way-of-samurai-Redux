import React, {useEffect} from 'react';
import { Avatar, List } from 'antd';
import {Link} from "react-router-dom";

type PropsType = {}

export const ChatMessages: React.FC<PropsType> = () => {

    useEffect(() => {

    }, [])

    return (
        <List
            style={{ height: '400px', overflowY: 'scroll'}}
            itemLayout="horizontal"
            // dataSource={messages}
            renderItem={(item: MessageType) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.photo} />}
                        title={<Link to={`/profile/${item.userId}`}>{item.userName}</Link>}
                        description={item.message}
                    />
                </List.Item>
            )}
        />
    )
}