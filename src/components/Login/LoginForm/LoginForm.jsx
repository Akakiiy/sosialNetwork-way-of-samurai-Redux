import {Field, reduxForm} from "redux-form";
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'}
                       name={'login'}
                       placeholder={'Login'}/>
            </div>
            <div>
                <Field
                    component={'input'}
                    name={'password'}
                    placeholder={'Password'}/>
            </div>
            <div>
                <Field
                    component={'input'}
                    type={'checkbox'}
                    name={'rememberMe'}/>
                запомни меня
            </div>
            <button>Log in</button>
        </form>
    );
}

const LoginFormRedux = reduxForm({
    form: 'login',
})(LoginForm);

export default LoginFormRedux;