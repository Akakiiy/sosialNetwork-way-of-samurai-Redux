import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "antd";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {
    wsChannel: WebSocket | null
}

export const NewChatMessageForm: React.FC<PropsType> = ({wsChannel}) => {
    const [statusWS, setStatusWS] = useState<'pending' | 'ready'>('pending')

    const initialValues: InitialValuesType = { newMessageText: '' }

    useEffect(() => {
        const openHandler = () => {
            setStatusWS('ready')
        }
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendChatMessage = (newMessageText: string | null) => {
        if (newMessageText) {
            wsChannel?.send(newMessageText)
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
                <Button type="primary" htmlType="submit" disabled={wsChannel === null && statusWS === 'pending'}>
                    Submit
                </Button>
            </Form>
        </Formik>
    )
}