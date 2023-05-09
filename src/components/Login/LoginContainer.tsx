import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../Redux/auth-reducer";
import {
    getCaptchaUrlSelector,
    getIsLoadingSelector,
    getIsLoggedSelector,
    getLoadingErrorMessageSelector
} from "../Redux/selectors/auth-selectors";
import {AppStateType} from "../Redux/store-redux";
import {ValuesType} from "./LoginForm/LoginForm";

type MSTPType = {
    isLogged: boolean
    loginErrorMessage: string | null
    isLoading: boolean
    captchaUrl: string
}
type MDTPType = {
    login: (values: ValuesType) => void
}
type OwnPropsType = {}

const mapDispatchToProps = (state: AppStateType): MSTPType => {
    return {
        isLogged: getIsLoggedSelector(state),
        loginErrorMessage: getLoadingErrorMessageSelector(state),
        isLoading: getIsLoadingSelector(state),
        captchaUrl: getCaptchaUrlSelector(state),
    }
}

export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapDispatchToProps, {login})(Login);