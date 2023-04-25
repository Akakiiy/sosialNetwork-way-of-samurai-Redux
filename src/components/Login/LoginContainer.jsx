import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../Redux/reducer-auth";


const mapDispatchToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
    }
}

export default connect(mapDispatchToProps, {login})(Login)