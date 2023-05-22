import s from './Users.module.css'
import {Field, Form, Formik} from "formik";
import React from "react";
import {Button} from "antd";

type InitialValuesType = {
    term: string
    friend: string
}
type PropsType = {
    searchUsers: (term: string, friend: null | boolean) => void
    term: string
    friend: null | boolean
    isLoading: boolean
    changePage: (page: number) => void
}

const UsersSearchForm: React.FC<PropsType> = ({searchUsers, friend, term, isLoading, changePage}) => {
    const initialValues: InitialValuesType = {
        term,
        friend: JSON.stringify(friend)
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => {
                const {term, friend} = values
                searchUsers(term, JSON.parse(friend));
                changePage(1)
            }}
        >
                <Form>
                    <div style={{display: 'flex', alignItems: 'end'}}>
                        <div className={s.formGroup}>
                            <Field className={s.formField} type="text" name="term" placeholder="Name"/>
                            <label htmlFor="term" className={s.formLabel}>Name</label>
                        </div>
                        <Field className={s.formSelect} name="friend" as={"select"}>
                            <option value="null">AlL</option>
                            <option value="true">Followed</option>
                            <option value="false">Unfollowed</option>
                        </Field>

                        <Button className={s.submitBtn} htmlType={'submit'} disabled={isLoading}>
                            Submit
                        </Button>
                    </div>
                </Form>
        </Formik>
    )
}

export default UsersSearchForm