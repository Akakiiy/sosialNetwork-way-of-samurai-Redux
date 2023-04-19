import React from "react";
import {addDialogMessageActionConstructor, changeDialogMessageActionConstructor} from "../Redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageText: () => {
            dispatch(addDialogMessageActionConstructor());
        },
        changeMessageText: (e) => {
            let message = e.target.value;
            dispatch(changeDialogMessageActionConstructor(message));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);