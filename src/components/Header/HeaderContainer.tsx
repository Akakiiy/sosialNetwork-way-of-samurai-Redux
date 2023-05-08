import {Component} from "react";
import {connect} from "react-redux";
import {logout, setAuthUserData,} from "../Redux/auth-reducer";
import Header from "./Header";
import {getIsLoggedSelector, GetLoginSelector} from "../Redux/selectors/auth-selectors";
import {AppStateType} from "../Redux/store-redux";

type MSTPType = {
    isLogged: boolean,
    login: string | null,
}
type MDTPType = {
    setAuthUserData: () => void
    logout: () => void
}
type OwnPropsType = {}
type PropsType = MSTPType & MDTPType & OwnPropsType

class HeaderContainer extends Component<PropsType> {

    render() {
        return (
            <Header isLogged={this.props.isLogged}
                    login={this.props.login}
                    logout={this.props.logout}/>
        );
    };
}

const mapStateToProps = (state: AppStateType): MSTPType  => {
    return {
        isLogged: getIsLoggedSelector(state),
        login: GetLoginSelector(state),
    }
}
//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State
export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);