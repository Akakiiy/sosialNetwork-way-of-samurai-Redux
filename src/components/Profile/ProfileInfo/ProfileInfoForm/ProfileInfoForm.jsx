import s from '../ProfileInfoContacts/ProfileInfoContacts.module.css';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";
import FieldForProfileForm from "./FieldForProfileForm";

const urlYupValidator = Yup.string().matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Please enter correct url');
const InitialValuesForForm = {
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: '',
};
const ProfileInfoForm = ({contacts, lookingForAJobDescription, haveNoInfo}) => {

    return (
        <div>
            <Formik
                initialValues={InitialValuesForForm}
                validationSchema={Yup.object().shape({
                    github: urlYupValidator,
                    vk: urlYupValidator,
                    facebook: urlYupValidator,
                    instagram: urlYupValidator,
                    twitter: urlYupValidator,
                    website: urlYupValidator,
                    youtube: urlYupValidator,
                    mainLink: urlYupValidator,
                })}
                onSubmit={(values, {resetForm}) => {
                    console.log(values)
                    resetForm(InitialValuesForForm);
                }}
                validateOnBlur={true}
            >
                <Form>
                    <div className={s.jubHunting}>
                        <div className={s.professionalSkills}>
                            <span>My professional skills</span>  <FieldForProfileForm placeholder={lookingForAJobDescription || haveNoInfo} type={'text'} name={'lookingForAJobDescription'}/>
                        </div>
                        <div className={s.professionalSkills}>
                            <span>Looking for a job</span><FieldForProfileForm type={'checkbox'} name={'lookingForAJob'}/>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        My contacts:
                        {
                            Object.keys(contacts).map(key => {
                                return (
                                    <div key={key} className={s.link}>
                                        <span>{key}</span> -> <FieldForProfileForm placeholder={contacts[key] || haveNoInfo} type={'text'} name={key}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button className={s.formSubmit}
                                type="submit"
                        >
                            submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ProfileInfoForm;