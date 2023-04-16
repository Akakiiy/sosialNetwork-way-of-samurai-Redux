import s from './Dialogs.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {addDialogMessageActionConstructor, changeDialogMessageActionConstructor} from "../Redux/reducer-dialogs";

const Dialogs = ({state, dispatch}) => {

    const dialogElements = state.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = state.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

    const messageText = React.createRef();

    const addMessageText = () => {
        dispatch(addDialogMessageActionConstructor());
    }

    const changeMessageText = () => {
        let message = messageText.current.value;
        dispatch(changeDialogMessageActionConstructor(message));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogElements }
                </div>
                <div className={s.messages}>
                    { messagesElements }
                    <textarea className={s.textarea} ref={messageText} value={state.newMessageText} onChange={changeMessageText}></textarea>
                    <div>
                        <button onClick={addMessageText}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;