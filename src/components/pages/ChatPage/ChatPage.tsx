import React, {useEffect, useState} from "react";
import {ChatMessages} from "./ChatMessages";
import {NewChatMessageForm} from "./NewChatMessageForm";
import {
    startMessagesListening,
    startStatusListening,
    stopMessagesListening,
    stopStatusListening
} from "../../Redux/chat-reducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";

const ChatPage = () => {
    const [autoscrollMode, setAutoscrollMode] = useState(true);
    const [fontSize, setFontSize] = useState(12);
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening());
        dispatch(startStatusListening());
        return () => {
            dispatch(stopStatusListening());
            dispatch(stopMessagesListening());
        }
    }, []);

    return (
        <div>
            <ChatMessages fontSize={fontSize}
                          autoscrollMode={autoscrollMode}/>
            <NewChatMessageForm fontSize={fontSize}
                                setFontSize={setFontSize}
                                autoscrollMode={autoscrollMode}
                                setAutoscrollMode={setAutoscrollMode}/>
        </div>
    )
}

export default ChatPage;