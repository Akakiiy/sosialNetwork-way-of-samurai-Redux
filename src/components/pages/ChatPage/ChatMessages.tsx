import React, {useEffect, useState} from 'react';
import { Avatar, List } from 'antd';
import {Link} from "react-router-dom";

type PropsType = {}
type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
export const ChatMessages: React.FC<PropsType> = () => {

    const [messages, setMessages] = useState<Array<MessageType>>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages: Array<any>) => [...prevMessages, ...newMessages]);
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