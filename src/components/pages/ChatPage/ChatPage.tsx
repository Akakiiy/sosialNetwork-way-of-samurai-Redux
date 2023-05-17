import React, {useEffect, useState} from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";

const ChatPage = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            setTimeout(createWS, 3000);
        }
        function createWS () {
            if (ws !== undefined) {
                ws.removeEventListener('close', closeHandler);
            }
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            setWsChannel(ws);
            ws.addEventListener('close', closeHandler);
        }
        createWS();
        return () => {
            ws.removeEventListener('close', closeHandler);
            ws.close()
        }
    }, []);

    return (
        <div>
            <ChatMessages wsChannel={wsChannel}/>
            <NewChatMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

export default ChatPage;