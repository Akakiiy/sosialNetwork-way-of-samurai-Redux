import React, {useEffect} from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";
import {
    startMessagesListening,
    startStatusListening,
    stopMessagesListening,
    stopStatusListening
} from "../../Redux/chat-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";
import {getChatStatusSelector} from "../../Redux/selectors/chat-selectors";

const ChatPage = () => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();
    const chatStatus = useSelector(getChatStatusSelector)

    useEffect(() => {
        console.log(chatStatus)
        dispatch(startMessagesListening());
        dispatch(startStatusListening());
        return () => {
            console.log(chatStatus)
            dispatch(stopStatusListening());
            dispatch(stopMessagesListening());
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