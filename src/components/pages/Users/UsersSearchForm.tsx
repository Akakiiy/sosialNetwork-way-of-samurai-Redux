import {Field, Form, Formik} from "formik";
import React from "react";

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
                    <Field type="text" name="term" />
                    <Field name="friend" as={"select"}>
                        <option value="null">AlL</option>
                        <option value="true">Followed</option>
                        <option value="false">Unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isLoading}>
                        Submit
                    </button>
                </Form>
        </Formik>
    )
}

export default UsersSearchForm