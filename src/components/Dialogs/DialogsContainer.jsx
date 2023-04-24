import {addDialogMessage} from "../Redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
        isLogged: state.auth.isLogged,
    };
};

export default compose(
    connect(mapStateToProps, {addDialogMessage}),
    WithAuthLogged,
)(Dialogs);