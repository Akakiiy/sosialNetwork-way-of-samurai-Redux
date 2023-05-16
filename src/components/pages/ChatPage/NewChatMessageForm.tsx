import React from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "antd";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {
    wsChannel: WebSocket
}

export const NewChatMessageForm: React.FC<PropsType> = ({wsChannel}) => {
    const initialValues: InitialValuesType = { newMessageText: '' }

    const sendChatMessage = (newMessageText: string | null) => {
        if (newMessageText) {
            wsChannel.send(newMessageText)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: InitialValuesType, {resetForm}) => {
                sendChatMessage(values.newMessageText);
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