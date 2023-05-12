import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

type PropsType = {
    addPost: (newPostText: string) => void
}

const MyPostForm: React.FC<PropsType> = (props) => {
    return (
        <Formik
            initialValues={{ newPostText: ''}}
            onSubmit={(values, {resetForm}) => {
                props.addPost(values.newPostText);
                resetForm();
            }}
        >
            <Form>
                <div>
                    <Field type="text"
                           name="newPostText"
                           component={'textarea'}
                           placeholder={'new post'} />
                </div>
                <ErrorMessage
                    name="newPostText"
                    component="div" />
                <div>
                    <button type="submit" >
                        Добавить пост
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

export default MyPostForm;