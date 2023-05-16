import React from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
const ChatPage = () => {
    return (
        <div>
            <ChatMessages wsChannel={wsChannel}/>
            <NewChatMessageForm wsChannel={wsChannel}/>
        </div>
    )
}

export default ChatPage;