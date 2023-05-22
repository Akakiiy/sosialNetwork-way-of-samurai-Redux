import s from './ChatPage.module.css'
import React, {useEffect, useRef} from 'react';
import {Avatar, List} from 'antd';
import {Link} from "react-router-dom";
import {MessageType} from "../../../api/chat-api";
import {useSelector} from "react-redux";
import {getMessagesSelector} from "../../Redux/selectors/chat-selectors";

type PropsType = {
    autoscrollMode: boolean
    fontSize: number
}

export const ChatMessages: React.FC<PropsType> = ({autoscrollMode, fontSize}) => {
    const chatBottom = useRef<null | HTMLDivElement>(null);
    const messages: MessageType[] = useSelector(getMessagesSelector);

    useEffect(() => {
        autoscrollMode && chatBottom.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    return (
        <List
            className={s.chatMessagesList}
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item: MessageType, i: number) => (
                <>
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Link to={`/profile/${item.userId}`}>
                                    <Avatar src={item.photo}/>
                                </Link>
                            }
                            title={
                                <Link style={{fontSize: `${fontSize}px`}}
                                      to={`/profile/${item.userId}`}
                                >{item.userName}
                                </Link>
                            }
                            description={<div style={{fontSize: `${fontSize}px`}}>{item.message}</div>}
                        />
                        <div ref={i === messages.length - 1 ? chatBottom : null}/>
                        {/*див используется для авто-скрола*/}
                    </List.Item>
                </>
            )}
        />
    )
}