import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = ({state}) => {

    const dialogElements = state.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);

    const messagesElements = state.messages.map((m, i) => <Message key={i} message={m.message} id={m.id} />)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;