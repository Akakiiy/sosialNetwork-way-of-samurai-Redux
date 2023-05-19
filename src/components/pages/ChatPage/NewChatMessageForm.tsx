import React from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "antd";
import {sendMessage} from "../../Redux/chat-reducer";
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {}

export const NewChatMessageForm: React.FC<PropsType> = () => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()
    const initialValues: InitialValuesType = { newMessageText: '' }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: InitialValuesType, {resetForm}) => {
                if (values.newMessageText) {
                    dispatch(sendMessage(values.newMessageText))
                }
                resetForm();
            }}
        >
            <Form>
                <div>
                    <Field as={'textarea'} type="text" name="newMessageText" />
                </div>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}