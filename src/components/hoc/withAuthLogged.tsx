import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/store-redux";

type MapPropsType = {
    isLogged: boolean
}
type MDTPType = {}
const mapStateToProps = (state: AppStateType): MapPropsType => ({isLogged: state.auth.isLogged});

export const WithAuthLogged = <WCP extends MapPropsType>(Component: React.ComponentType<WCP>) => {
    function WithAuthLoggedContainer(props: MapPropsType & MDTPType) {
        let {isLogged, ...restProps} = props
        if (!isLogged) return <Redirect to={'/login'}/>

        return <Component {...restProps as WCP} />
    }

    return connect<MapPropsType, MDTPType, WCP, AppStateType>(mapStateToProps)(WithAuthLoggedContainer);
};