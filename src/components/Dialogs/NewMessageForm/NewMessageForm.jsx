import s from './NewMessageForm.module.css';
import {Field, reduxForm} from "redux-form";
import React from "react";


const NewMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.textarea}
                   component={'textarea'}
                   name={'message'}
                   placeholder={'new message'} />
            <button>Отправить</button>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({
    form: 'newMessage',
})(NewMessageForm);

export default NewMessageReduxForm;