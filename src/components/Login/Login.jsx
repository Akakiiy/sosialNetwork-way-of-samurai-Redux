import s from './Login.module.css';
import LoginFormRedux from "./LoginForm/LoginForm";


const Login = (props) => {
    const func = (formData) => {
        console.log(formData)
    }

    return (
        <div className={s.login}>
            <h2>LOGIN</h2>
            <LoginFormRedux onSubmit={func} />
        </div>
    );
}

export default Login;