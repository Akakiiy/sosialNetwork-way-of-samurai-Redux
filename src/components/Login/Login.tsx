import s from './Login.module.css';
import LoginForm, {ValuesType} from "./LoginForm/LoginForm";
import {Navigate} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import React from "react";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../Redux/store-redux";
import {useDispatch, useSelector} from "react-redux";
import {
    getCaptchaUrlSelector,
    getIsLoadingSelector,
    getIsLoggedSelector,
    getLoadingErrorMessageSelector
} from "../Redux/selectors/auth-selectors";
import {login} from "../Redux/auth-reducer";

type PropsType = {}

const LoginPage: React.FC<PropsType> = () => {
    const isLogged: boolean = useSelector(getIsLoggedSelector);
    const loginErrorMessage: string | null = useSelector(getLoadingErrorMessageSelector);
    const isLoading: boolean = useSelector(getIsLoadingSelector);
    const captchaUrl: string = useSelector(getCaptchaUrlSelector);

    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()

    const loginFunc = (values: ValuesType) => {
        dispatch(login(values));
    }

    if (isLogged) {
        return <Navigate to={'/profile'} replace/>
    }
    return (
        <div className={s.login}>
            <div className={s.loginWrapper}>
                <h2>LOGIN</h2>
                <LoginForm login={loginFunc}
                           captchaUrl={captchaUrl}/>
                <div className={s.loginErrorMessage}
                     style={(loginErrorMessage && {visibility: 'visible', opacity: '1'}) as React.CSSProperties}>{loginErrorMessage}</div>
            </div>
            {
                isLoading ? <Preloader /> : null
            }
        </div>
    );
}

export default LoginPage