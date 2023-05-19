import React, {useEffect} from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";

const ChatPage = () => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <ChatMessages />
            <NewChatMessageForm />
        </div>
    )
}

export default ChatPage;