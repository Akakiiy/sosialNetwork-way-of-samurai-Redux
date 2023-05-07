import {Component} from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData,} from "../Redux/auth-reducer.ts";
import Header from "./Header";

class HeaderContainer extends Component {

    render() {
        return (
            <Header isLogged={this.props.isLogged}
                    login={this.props.login}
                    logout={this.props.logout}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);