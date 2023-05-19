import React, {useEffect} from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";
import {startMessagesListening, stopMessagesListening} from "../../Redux/chat-reducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";

const ChatPage = () => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, []);

    return (
        <div>
            <ChatMessages />
            <NewChatMessageForm />
        </div>
    )
}

export default ChatPage;