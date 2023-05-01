import s from '../ProfileInfoContacts/ProfileInfoContacts.module.css';
import {Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";
import FieldForProfileForm from "./FieldForProfileForm";
import {connect} from "react-redux";
import {putUserProfileInfo} from "../../../Redux/profile-reducer";
import {getUserIdSelector} from "../../../Redux/selectors/auth-selectors";
import {getProfileSelector} from "../../../Redux/selectors/profile-selectors";

const ProfileInfoForm = ({contacts, lookingForAJobDescription, lookingForAJob, haveNoInfo, putUserProfileInfo, userId, fullName, aboutMe, changeChangeMode}) => {

    const urlYupValidator = Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Please enter correct url');

    const InitialValuesForForm = (contacts, lookingForAJobDescription, lookingForAJob, ) => {
        return {
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: lookingForAJobDescription || '',
            aboutMe: aboutMe || '',
            github: contacts.github || '',
            vk: contacts.vk || '',
            facebook: contacts.facebook || '',
            instagram: contacts.instagram || '',
            twitter: contacts.twitter || '',
            website: contacts.website || '',
            youtube: contacts.youtube || '',
            mainLink: contacts.mainLink || '',
        }
    };
    const combineUserProfileDataInfoForUploading = (values) => {
        return {
            userId,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription,
            fullName,
            aboutMe: values.aboutMe,
            contacts: {
                github: values.github,
                vk: values.vk,
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter,
                website: values.website,
                youtube: values.youtube,
                mainLink: values.mainLink,
            }
        }
    };

    return (
        <div>
            <Formik
                initialValues={InitialValuesForForm(contacts, lookingForAJobDescription, lookingForAJob, aboutMe)}
                validationSchema={Yup.object().shape({
                    aboutMe: Yup.string().required('Sorry, but this input is required'),
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
                    putUserProfileInfo(combineUserProfileDataInfoForUploading(values));
                    changeChangeMode();
                    resetForm(InitialValuesForForm(contacts, lookingForAJobDescription, lookingForAJob, aboutMe));
                }}
                validateOnBlur={true}
            >
                <Form>
                    <div className={s.jubHunting}>
                        <div className={s.professionalSkills}>
                            <span>My professional skills</span> <FieldForProfileForm placeholder={lookingForAJobDescription || haveNoInfo}
                                                                                     type={'text'}
                                                                                     name={'lookingForAJobDescription'}/>
                        </div>
                        <div className={s.professionalSkills}>
                            <span>Looking for a job</span><FieldForProfileForm type={'checkbox'}
                                                                               name={'lookingForAJob'}/>
                        </div>
                        <div className={s.professionalSkills}>
                            <span>About Me</span> <FieldForProfileForm placeholder={aboutMe || haveNoInfo}
                                                                       type={'text'}
                                                                       name={'aboutMe'}/>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        My contacts:
                        {
                            Object.keys(contacts).map(key => {
                                return (
                                    <div key={key} className={s.link}>
                                        <span>{key}</span> -> <FieldForProfileForm
                                        placeholder={contacts[key] || haveNoInfo} type={'text'} name={key}/>
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

const mapStateToProps = (state) => {
    return {
        userId: getUserIdSelector(state),
        fullName: getProfileSelector(state).fullName,
    }
}

export default connect(mapStateToProps, {putUserProfileInfo})(ProfileInfoForm);