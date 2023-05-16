import s from './Login.module.css';
import LoginForm, {ValuesType} from "./LoginForm/LoginForm";
import {redirect} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import React from "react";

type PropsType = {
    isLogged: boolean
    captchaUrl: string
    loginErrorMessage: string | null
    login: (values: ValuesType) => void
    isLoading: boolean
}

const Login: React.FC<PropsType> = (props) => {

    if (props.isLogged) {
        redirect('/profile')
    }

    return (
        <div className={s.login}>
            <div>
                <h2>LOGIN</h2>
                <LoginForm login={props.login}
                           captchaUrl={props.captchaUrl}/>
                <div className={s.loginErrorMessage}
                     style={(props.loginErrorMessage && {visibility: 'visible', opacity: '1'}) as React.CSSProperties}>{props.loginErrorMessage}</div>
            </div>
            {
                props.isLoading ? <Preloader /> : null
            }
        </div>
    );
}

export default Login;