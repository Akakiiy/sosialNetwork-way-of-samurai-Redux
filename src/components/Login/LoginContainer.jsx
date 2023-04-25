import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../Redux/reducer-auth";


const mapDispatchToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        loginErrorMessage: state.auth.loginErrorMessage,
        isLoading: state.auth.isLoading,
    }
}

export default connect(mapDispatchToProps, {login})(Login);