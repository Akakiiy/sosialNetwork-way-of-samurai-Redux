import s from './Login.module.css';
import LoginForm from "./LoginForm/LoginForm";


const Login = () => {

    return (
        <div className={s.login}>
            <h2>LOGIN</h2>
            <LoginForm />
        </div>
    );
}

export default Login;