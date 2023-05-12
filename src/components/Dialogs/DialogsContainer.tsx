import {dialogsActions} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getDialogsSelector, getMessagesSelector} from "../Redux/selectors/dialogs-selectors";
import {AppStateType} from "../Redux/store-redux";
import React from "react";

type MSTPType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type MDTPType = {
    addDialogMessage: (message: string) => void
}
type OwnPropsType = {}
const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        dialogs: getDialogsSelector(state),
        messages: getMessagesSelector(state),
    };
};
export default compose(
    connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {addDialogMessage: dialogsActions.addDialogMessage}),
    WithAuthLogged,
)(Dialogs) as React.ComponentType;