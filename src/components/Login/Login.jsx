import s from './Login.module.css';
import LoginForm from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    if (props.isLogged) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.login}>
            <h2>LOGIN</h2>
            <LoginForm isLogged={props.isLogged}
                       login={props.login}/>
        </div>
    );
}

export default Login;