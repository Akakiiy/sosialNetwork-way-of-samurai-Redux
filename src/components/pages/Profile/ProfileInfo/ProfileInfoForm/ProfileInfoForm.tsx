import s from '../ProfileInfoContacts/ProfileInfoContacts.module.css';
import {Form, Formik, FormikProps} from "formik";
import * as Yup from "yup";
import React from "react";
import FieldForProfileForm from "./FieldForProfileForm";
import {connect} from "react-redux";
import {ProfileType, putUserProfileInfo} from "../../../../Redux/profile-reducer";
import {getUserIdSelector} from "../../../../Redux/selectors/auth-selectors";
import {getFullName} from "../../../../Redux/selectors/profile-selectors";
import {ContactsType} from "../ProfileInfoContacts/ProfileTextInfo";
import {AppStateType} from "../../../../Redux/store-redux";
import {Button} from "antd";

type PropsType = MDSPType & MDTPType & OwnPropsType; //& FormikProps<FormValuesType>

type FormValuesType = {
    lookingForAJobDescription: string | undefined
    lookingForAJob: boolean
    aboutMe: string
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

const ProfileInfoForm: React.FC<PropsType> = ({ contacts, lookingForAJobDescription,
                                                  lookingForAJob, haveNoInfo,
                                                  putUserProfileInfo, userId,
                                                  fullName, aboutMe, changeChangeMode }) => {

    const urlYupValidator = Yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Please enter correct url');

    const InitialValuesForForm = (contacts: ContactsType, lookingForAJobDescription: string, lookingForAJob: boolean, aboutMe: string): FormValuesType => {
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
        };
    };

    const combineUserProfileDataInfoForUploading = (values: FormValuesType): ProfileType => {
        return {
            userId,
            lookingForAJob: values.lookingForAJob,
            lookingForAJobDescription: values.lookingForAJobDescription || '',
            fullName,
            aboutMe,
            contacts: {
                github: values.github,
                vk: values.vk,
                facebook: values.facebook,
                instagram: values.instagram,
                twitter: values.twitter,
                website: values.website,
                youtube: values.youtube,
                mainLink: values.mainLink,
            },
        };
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
                onSubmit={(values, { resetForm }) => {
                    putUserProfileInfo(combineUserProfileDataInfoForUploading(values));
                    changeChangeMode();
                    resetForm();
                }}
                validateOnBlur={true}
            >
                <Form>
                    <div className={s.jubHunting}>
                        <div className={s.professionalSkills}>
                            <span>My professional skills</span> <FieldForProfileForm
                            placeholder={lookingForAJobDescription || haveNoInfo}
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
                                        <span>{key} &gt; </span><FieldForProfileForm
                                        placeholder={contacts[key as keyof ContactsType] || haveNoInfo} type={'text'}
                                        name={key}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Button style={{marginTop: '10px'}} type={"primary"} htmlType={"submit"}>
                            Применить
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

type MDSPType = {
    userId: number | null
    fullName: string | null
}
type MDTPType = {
    putUserProfileInfo: (values: ProfileType) => void
}
type OwnPropsType = {
    contacts: ContactsType
    lookingForAJobDescription: string
    lookingForAJob: boolean
    haveNoInfo: string
    aboutMe: string
    changeChangeMode: () => void
}

const mapStateToProps = (state: AppStateType): MDSPType => {
    return {
        userId: getUserIdSelector(state),
        fullName: getFullName(state),
    }
}

export default connect<MDSPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {putUserProfileInfo})(ProfileInfoForm);