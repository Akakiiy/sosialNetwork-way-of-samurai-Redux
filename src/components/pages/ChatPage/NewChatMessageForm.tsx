import React, {useEffect} from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "antd";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {}

export const NewChatMessageForm: React.FC<PropsType> = () => {

    const initialValues: InitialValuesType = { newMessageText: '' }

    useEffect(() => {

    }, [])

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: InitialValuesType, {resetForm}) => {

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