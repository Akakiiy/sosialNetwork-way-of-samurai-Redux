import React, {useEffect, useState} from 'react';
import { Avatar, List } from 'antd';
import {Link} from "react-router-dom";

type PropsType = {
    wsChannel: WebSocket
}
type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}


export const ChatMessages: React.FC<PropsType> = ({wsChannel}) => {

    const [messages, setMessages] = useState<MessageType[]>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
        });
    }, []);

    return (
        <List
            style={{ height: '400px', overflowY: 'scroll'}}
            itemLayout="horizontal"
            dataSource={messages}
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