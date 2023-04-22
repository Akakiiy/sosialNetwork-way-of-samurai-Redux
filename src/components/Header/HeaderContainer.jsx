import {Component} from "react";
import {connect} from "react-redux";
import {autoLogIn,} from "../Redux/reducer-auth";
import Header from "./Header";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.autoLogIn()
    }

    render() {
        return (
            <Header isLogged={this.props.isLogged}
                    isLoading={this.props.isLoading}
                    login={this.props.login}/>
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

export default connect(mapStateToProps, {autoLogIn})(HeaderContainer);