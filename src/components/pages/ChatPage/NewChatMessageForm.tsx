import React from "react";
import {Field, Form, Formik} from "formik";
import {Button, Switch} from "antd";
import {sendMessage} from "../../Redux/chat-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";
import {getChatStatusSelector} from "../../Redux/selectors/chat-selectors";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {
    autoscrollMode: boolean
    setAutoscrollMode: (autoscrollMode: boolean) => void
}

export const NewChatMessageForm: React.FC<PropsType> = ({autoscrollMode ,setAutoscrollMode}) => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()
    const initialValues: InitialValuesType = { newMessageText: '' }
    const chatStatus = useSelector(getChatStatusSelector)

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
                <div style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
                    <Button disabled={chatStatus === 'pending' || chatStatus === 'error'} type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Switch style={{marginLeft: '10px'}} onChange={() => setAutoscrollMode(!autoscrollMode)}
                            checkedChildren="autoscroll"
                            unCheckedChildren="no autoscroll"
                            checked={autoscrollMode}/>
                </div>
            </Form>
        </Formik>
    )
}