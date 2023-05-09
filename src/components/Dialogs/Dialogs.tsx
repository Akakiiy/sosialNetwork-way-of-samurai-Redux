import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import {DialogType, MessageType} from "./DialogsContainer";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isLogged: boolean
    addDialogMessage: (message: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogElements = props.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message} />)

    if (!props.isLogged) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                    <NewMessageForm addDialogMessage={props.addDialogMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;