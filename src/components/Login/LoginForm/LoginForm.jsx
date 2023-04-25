import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from "yup";

const LoginForm = (props) => {

    return (
        <Formik
            initialValues={{ email: '', password: '', rememberMe: false}}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().required('Required'),
            })}
            onSubmit={values => {props.login(values)}}
            validateOnBlur={true}
        >
            <Form>
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
                <div>
                    <button type="submit">Log IN</button>
                </div>
            </Form>
        </Formik>
    );
}

export default LoginForm;