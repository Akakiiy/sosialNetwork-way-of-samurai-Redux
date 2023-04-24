import s from './NewMessageForm.module.css';
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


const NewMessageForm = (props) => {

    return (
        <Formik
            initialValues={{message: ''}}
            validationSchema={Yup.object().shape({
                message: Yup.string()
                    .min(1, 'Too Short!')
                    .max(300, 'Too Long! 300 symbols max'),
            })}
            onSubmit={(values, {resetForm}) => {
                props.addDialogMessage(values.message);
                resetForm({message: ''});
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
                                  style={{'color': 'red'}}/>
                </div>
                <div>
                    <button type="submit">Отправить</button>
                </div>
            </Form>
        </Formik>
    );
}
export default NewMessageForm;