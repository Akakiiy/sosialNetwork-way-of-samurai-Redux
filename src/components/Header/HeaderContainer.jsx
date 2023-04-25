import {Component} from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData,} from "../Redux/reducer-auth";
import Header from "./Header";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return (
            <Header isLogged={this.props.isLogged}
                    isLoading={this.props.isLoading}
                    login={this.props.login}
                    logout={this.props.logout}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged,
        isLoading: state.auth.isLoading,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);