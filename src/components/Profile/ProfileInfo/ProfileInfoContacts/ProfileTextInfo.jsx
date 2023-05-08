import s from "./ProfileInfoContacts.module.css";
import React from "react";

const ProfileInfoText = ({lookingForAJobDescription, haveNoInfo, lookingForAJob, contacts, aboutMe}) => {
    return (
        <>
            <div className={s.jubHunting}>
                <div className={s.professionalSkills}>
                    <span>My professional skills</span> {lookingForAJobDescription || haveNoInfo}
                </div>
                <div className={s.professionalSkills}>
                    <span>Looking for a job</span> {lookingForAJob ? 'да' : 'нет'}
                </div>
                <div className={s.professionalSkills}>
                    <span>About Me</span> {aboutMe || haveNoInfo}
                </div>
            </div>
            <div className={s.contacts}>
                My contacts:
                {
                    Object.keys(contacts).map(key => {
                        return (
                            <div key={key} className={s.link}>
                                <span>{key}</span> &gt; {contacts[key] || haveNoInfo}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProfileInfoText;