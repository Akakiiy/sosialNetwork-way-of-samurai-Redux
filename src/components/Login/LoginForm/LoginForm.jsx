import {ErrorMessage, Field, Form, Formik} from "formik";
import React from "react";

const LoginForm = () => {

    return (
        <Formik
            initialValues={{ login: '', password: '', rememberMe: false}}
            // validate={values => {}}
            onSubmit={values => {console.log(values)}}
        >
            <Form>
                <div>
                    <Field type="text"
                           name="login"
                           placeholder={'Login'} />
                    <ErrorMessage name="login"
                                  component="div" />
                </div>
                <div>
                    <Field type="password"
                           name="newPostText"
                           placeholder={'Password'} />
                    <ErrorMessage name="password"
                                  component="div" />
                </div>
                <div>
                    <Field type="checkbox"
                           name="rememberMe"/>

                    запомнить меня

                    <ErrorMessage name="rememberMe"
                                  component="div" />
                </div>
                <div>
                    <button type="submit">Log IN</button>
                </div>
            </Form>
        </Formik>
    );
}

export default LoginForm;