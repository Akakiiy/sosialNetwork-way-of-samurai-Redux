import React from "react";
import {addDialogMessageActionConstructor, changeDialogMessageActionConstructor} from "../Redux/reducer-dialogs";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState();

    const addMessageText = () => {
        props.store.dispatch(addDialogMessageActionConstructor());
    }

    const changeMessageText = (e) => {
        let message = e.target.value;
        props.store.dispatch(changeDialogMessageActionConstructor(message));
    }

    return <Dialogs
                dialogs={state.dialogPage.dialogs}
                messages={state.dialogPage.messages}
                newMessageText={state.dialogPage.newMessageText}
                addMessageText={addMessageText}
                changeMessageText={changeMessageText}/>
}

export default DialogsContainer;