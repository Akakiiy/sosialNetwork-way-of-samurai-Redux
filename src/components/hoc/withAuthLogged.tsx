import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/store-redux";

type MapPropsType = {
    isLogged: boolean
}
const mapStateToProps = (state: AppStateType): MapPropsType => ({isLogged: state.auth.isLogged});

export const WithAuthLogged = <WTC extends MapPropsType>(Component: React.ComponentType<WTC>) => {
    function WithAuthLoggedContainer(props: MapPropsType) {

        if (!props.isLogged) {
            return <Redirect to={'/login'}/>
        }
        return (
            <Component {...props as WTC} />
        );
    }

    return connect(mapStateToProps)(WithAuthLoggedContainer);
};