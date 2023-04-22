import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    const dialogElements = props.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = props.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

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
                    <textarea className={s.textarea}
                              value={props.newMessageText}
                              onChange={props.changeMessageText} />
                    <div>
                        <button onClick={props.addMessageText}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;