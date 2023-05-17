import React from "react";
import {Navigate, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDialogsSelector, getMessagesSelector} from "../Redux/selectors/dialogs-selectors";
import {compose} from "redux";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {dialogsActions} from "../Redux/dialogs-reducer";
import { Tabs } from 'antd';

import { List, Typography, Col, Row } from 'antd';
import NewMessageForm from "./NewMessageForm/NewMessageForm";

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type PropsType = {
    isLogged: boolean
}

const Dialogs: React.FC<PropsType> = (props) => {

    const dialogs: Array<DialogType> = useSelector(getDialogsSelector)
    const messages: Array<MessageType> = useSelector(getMessagesSelector)
    const dispatch = useDispatch();

    const addMessage = (message: string) => {
        dispatch(dialogsActions.addDialogMessage(message))
    }

    return (
        <>
            {
                props.isLogged
                    ?<Row>
                        <Col span={18}>
                            <div>
                                <Tabs
                                    defaultActiveKey="1"
                                    tabPosition={"left"}
                                    style={{ height: '100%', padding: 20 }}
                                    items={dialogs.map((dialog, i) => {
                                        return {
                                            label: <div>{dialog.name}</div>,
                                            key: `${dialog.id}`,
                                            disabled: i === dialogs.length,
                                            children: <div>
                                                <List
                                                    bordered
                                                    dataSource={messages}
                                                    renderItem={(item) => (
                                                        <List.Item key={item.id}>
                                                            <Typography.Text>
                                                                {item.message}
                                                            </Typography.Text>
                                                        </List.Item>
                                                   )}
                                                />
                                                <NewMessageForm addDialogMessage={addMessage}/>
                                            </div>,
                                        };
                                    })}
                                />
                            </div>
                        </Col>
                    </Row>
                    : <Navigate to={'/login'} replace/>
            }
        </>
    )
}
export default compose(WithAuthLogged)(Dialogs) as React.ComponentType;