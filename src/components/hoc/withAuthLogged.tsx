import React from "react";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../Redux/store-redux";

type PropsType = {
    isLogged: boolean
}

type MSTPForLoggedType = {
    isLogged: boolean
}

const mapStateToPropsForLogged = (state: AppStateType): MSTPForLoggedType => {
    return {
        isLogged: state.auth.isLogged,
    }
}

    export const WithAuthLogged = (Component: React.ComponentType<any>) => { //ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ
        class WithAuthLoggedContainer extends React.Component<PropsType> {

            render() {
                if (!this.props.isLogged) {
                    return <Redirect to={'/login'} />
                }
                return (
                    <Component {...this.props} />
                );
            }
        }

        return compose(
            withRouter,
            connect(mapStateToPropsForLogged),
        )(WithAuthLoggedContainer);
    };