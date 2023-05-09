import s from './LoginForm.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

type PropsType = {
    captchaUrl: string | null
    login: (values: ValuesType) => void
}
export type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<PropsType> = (props) => {

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false, captcha: ''}}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={(values: ValuesType) => {
                props.login(values);
            }}
            validateOnBlur={true}
        >
            <Form className={s.loginForm}>
                <div>
                    <Field type="text"
                           name="email"
                           placeholder={'Login'} />
                    <ErrorMessage name="email"
                                  component="div" />
                </div>
                <div>
                    <Field type="password"
                           name="password"
                           placeholder={'Password'} />
                    <ErrorMessage name="password"
                                  component="div" />
                </div>
                <div>
                    <Field type="checkbox"
                           name="rememberMe"/>
                    <span>запомнить меня</span>
                </div>
                <div className={s.captcha}>
                    {
                        props.captchaUrl && <>
                            <img src={props.captchaUrl} alt="captcha"/>
                            <Field type="text"
                                   name="captcha"/>
                            <ErrorMessage name="password"
                                          component="div" />
                        </>
                    }
                </div>
                <div>
                    <button type="submit">Log IN</button>
                </div>
            </Form>
        </Formik>
    );
}

export default LoginForm;