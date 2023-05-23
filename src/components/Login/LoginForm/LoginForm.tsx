import {useFormik} from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Checkbox, Form, Input } from 'antd';

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
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: '',
        },
        onSubmit: (values: ValuesType) => {
            props.login(values);
        },
    });
    const [form] = Form.useForm();
    const onReset = () => {
        formik.resetForm();
        form.resetFields();
    };
    let schema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Please input your username!'),
        password: Yup.string().required('Please input your password!'),
    });
    const yupSync = {
        async validator({field}: any, value: any) {
            await schema.validateSyncAt(field, {[field]: value});
        },
    };

    return (
        <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={formik.initialValues}
            onFinish={formik.handleSubmit}
        >
            <Form.Item
                label="Username"
                name="email"
                rules={[yupSync]}
            >
                <Input onChange={formik.handleChange} value={formik.values.email}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[yupSync]}
            >
                <Input.Password onChange={formik.handleChange}/>
            </Form.Item>

            <Form.Item name="rememberMe" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox onChange={formik.handleChange}>Remember me</Checkbox>
            </Form.Item>
            {
                props.captchaUrl && <>
                    <img src={props.captchaUrl} alt="captcha"/>
                    <Form.Item
                      label="Captcha"
                      name="captcha"
                      rules={[{required: true, message: 'Please input captcha' }]}
                    >
                      <Input onChange={formik.handleChange}/>
                    </Form.Item>
                </>
            }
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button style={{marginLeft: '25px'}} htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;