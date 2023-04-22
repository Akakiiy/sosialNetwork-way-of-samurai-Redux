import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForLogged = (state) => {
    return {
        isLogged: state.auth.isLogged,
    }
}

export const WithAuthLogged = (Component) => {
    class WithAuthLoggedContainer extends React.Component {

        render() {
            console.log('подгрузился компонент с редиректом на логинизацию')
            if (!this.props.isLogged) {
                return <Redirect to={'/login'} />
            }
            return (
                <Component {...this.props} />
            );
        }
    }
    return connect(mapStateToPropsForLogged)(WithAuthLoggedContainer);
};