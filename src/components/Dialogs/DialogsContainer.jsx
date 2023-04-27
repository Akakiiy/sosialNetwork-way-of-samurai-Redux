import {addDialogMessage} from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getDialogSelector, getMessagesSelector, GetNewMessageTextSelector} from "../Redux/selectors/dialogs-selectors";
import {getIsLoggedSelector} from "../Redux/selectors/auth-selectors";

const mapStateToProps = (state) => {
    return {
        dialogs: getDialogSelector(state),
        messages: getMessagesSelector(state),
        newMessageText: GetNewMessageTextSelector(state),
        isLogged: getIsLoggedSelector(state),
    };
};

export default compose(
    connect(mapStateToProps, {addDialogMessage}),
    WithAuthLogged,
)(Dialogs);