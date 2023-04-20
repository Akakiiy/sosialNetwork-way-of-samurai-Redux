import {Component} from "react";
import {connect} from "react-redux";
import {getAuthResponseInState, setLoading, setUserIsLogged} from "../Redux/reducer-auth";
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setLoading(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUserIsLogged(false);
                this.props.setLoading(false);
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data;
                    this.props.getAuthResponseInState(id, email, login);
                    this.props.setUserIsLogged(true);
                }

            })
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

export default connect(mapStateToProps, {getAuthResponseInState, setUserIsLogged, setLoading})(HeaderContainer);