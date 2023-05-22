import s from './ChatPage.module.css'
import React from "react";
import {Field, Form, Formik} from "formik";
import {Button, Radio, RadioChangeEvent, Switch} from "antd";
import {sendMessage} from "../../Redux/chat-reducer";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";
import {getChatStatusSelector} from "../../Redux/selectors/chat-selectors";

type InitialValuesType = {
    newMessageText: string
}
type PropsType = {
    fontSize: number
    autoscrollMode: boolean
    setAutoscrollMode: (autoscrollMode: boolean) => void
    setFontSize: (fontSize: number) => void
}

export const NewChatMessageForm: React.FC<PropsType> = ({autoscrollMode ,setAutoscrollMode, setFontSize, fontSize}) => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()
    const initialValues: InitialValuesType = { newMessageText: '' }
    const chatStatus = useSelector(getChatStatusSelector)

    const changeFontSize = (e: RadioChangeEvent) => {
        setFontSize(e.target.value);
    }

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
            <Form className={s.chatMessageForm}>
                <Radio.Group onChange={changeFontSize} value={fontSize}>
                    <Radio value={12}>12</Radio>
                    <Radio value={13}>13</Radio>
                    <Radio value={14}>14</Radio>
                    <Radio value={15}>15</Radio>
                </Radio.Group>
                <div>
                    <Field style={{fontSize: `${fontSize}px`}}
                           className={s.chatMessageFormTextarea}
                           as={'textarea'}
                           type="text"
                           name="newMessageText" />
                </div>
                <div className={s.chatMessageFormBtns}>
                    <Button disabled={chatStatus === 'pending' || chatStatus === 'error'} type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Switch className={s.chatMessageFormSwitch}
                            onChange={() => setAutoscrollMode(!autoscrollMode)}
                            checkedChildren="autoscroll"
                            unCheckedChildren="no autoscroll"
                            checked={autoscrollMode}/>
                </div>
            </Form>
        </Formik>
    )
}