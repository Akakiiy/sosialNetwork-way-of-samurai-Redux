import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {

    const dialogElements = props.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = props.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

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