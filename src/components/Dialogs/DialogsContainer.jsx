import {addDialogMessageActionConstructor, changeDialogMessageActionConstructor} from "../Redux/reducer-dialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageText: state.dialogPage.newMessageText,
        // isLogged: state.auth.isLogged,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthLogged,
)(Dialogs);