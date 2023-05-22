import React, {useEffect, useRef} from 'react';
import { Avatar, List } from 'antd';
import {Link} from "react-router-dom";
import {MessageType} from "../../../api/chat-api";
import {useSelector} from "react-redux";
import {getMessagesSelector} from "../../Redux/selectors/chat-selectors";

type PropsType = {
    autoscrollMode: boolean
}

export const ChatMessages: React.FC<PropsType> = ({autoscrollMode}) => {
    const chatBottom = useRef<null | HTMLDivElement>(null);
    const messages: MessageType[] = useSelector(getMessagesSelector);

    useEffect(() => {
        autoscrollMode && chatBottom.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <List
            style={{ height: '400px', overflowY: 'scroll'}}
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item: MessageType, i: number) => (
                <>
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.photo} />}
                            title={<Link to={`/profile/${item.userId}`}>{item.userName}</Link>}
                            description={item.message}
                        />
                        <div ref={i === messages.length - 1 ? chatBottom : null} /> {/*див используется сугубо для авто скрола*/}
                    </List.Item>
                </>
            )}
        />
    )
}