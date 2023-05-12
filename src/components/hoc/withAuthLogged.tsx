import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/store-redux";

type MapPropsType = {
    isLogged: boolean
}
const mapStateToProps = (state: AppStateType): MapPropsType => ({isLogged: state.auth.isLogged});

export const WithAuthLogged = (Component: React.ComponentType<any>) => { //мне очень не нравится это any, но я займусь им позже
    function WithAuthLoggedContainer(props: MapPropsType) {
        if (!props.isLogged) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Component {...props} />
        );
    }

    return connect(mapStateToProps)(WithAuthLoggedContainer);
};