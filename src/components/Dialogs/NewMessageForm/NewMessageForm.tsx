import s from './NewMessageForm.module.css';
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

type PropsType = {
    addDialogMessage: (message: string) => void
}
type MessageType = {
    message: string
}

const NewMessageForm: React.FC<PropsType> = (props) => {
    const initialMessageValue: MessageType = {
        message: ''
    }

    return (
        <Formik
            initialValues={initialMessageValue}
            validationSchema={Yup.object().shape({
                message: Yup.string()
                    .min(1, 'Too Short!')
                    .max(300, 'Too Long! 300 symbols max'),
            })}
            onSubmit={(values: MessageType, {resetForm}) => {
                props.addDialogMessage(values.message);
                //@ts-ignore
                resetForm(initialMessageValue); //ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ
            }}
            validateOnBlur={true}
        >
            <Form>
                <div>
                    <Field className={s.textarea}
                           type="text"
                           name="message"
                           component={'textarea'}
                           placeholder={'new message'}/>
                    <ErrorMessage name="message"
                                  component="div"
                                  // @ts-ignore
                                  style={({color: 'red'}) as React.CSSProperties}
                        //ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ
                    />
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </Form>
        </Formik>
    );
}
export default NewMessageForm;