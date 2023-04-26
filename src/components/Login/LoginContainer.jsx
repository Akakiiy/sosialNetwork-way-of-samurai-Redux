import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../Redux/reducer-auth";
import {
    getIsLoadingSelector,
    getIsLoggedSelector,
    getLoadingErrorMessageSelector
} from "../Redux/selectors/auth-selectors";


const mapDispatchToProps = (state) => {
    return {
        isLogged: getIsLoggedSelector(state),
        loginErrorMessage: getLoadingErrorMessageSelector(state),
        isLoading: getIsLoadingSelector(state),
    }
}

export default connect(mapDispatchToProps, {login})(Login);