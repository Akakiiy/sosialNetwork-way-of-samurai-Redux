import React from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";

const ChatPage = () => {
    return (
        <div>
            <ChatMessages />
            <NewChatMessageForm />
        </div>
    )
}

export default ChatPage;