import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const MyPostForm = (props) => {
    return (
        <Formik
            initialValues={{ newPostText: ''}}
            onSubmit={(values, {resetForm}) => {
                props.addPost(values.newPostText);
                resetForm({ newPostText: ''});
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
                <div>
                    <button>
                        Удалить пост
                    </button>
                </div>
            </Form>
        </Formik>
    );
}

export default MyPostForm;