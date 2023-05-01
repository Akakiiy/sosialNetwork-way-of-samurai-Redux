import s from './ProfileInfoContacts.module.css';
import React, {useState} from "react";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfileTextInfo from "./ProfileTextInfo";

const haveNoInfo = 'ничего не указано';
const ProfileInfoContacts = ({contacts, lookingForAJob, lookingForAJobDescription, isOwner}) => {
    const [changeMode, setChangeMode] = useState(false);

    return (
        <div className={s.profileInfo}>
            {
                changeMode
                    ? <ProfileInfoForm contacts={contacts}
                                       haveNoInfo={haveNoInfo}
                                       lookingForAJobDescription={lookingForAJobDescription} />
                    : <ProfileTextInfo contacts={contacts}
                                       haveNoInfo={haveNoInfo}
                                       lookingForAJobDescription={lookingForAJobDescription}
                                       lookingForAJob={lookingForAJob} />
            }
            {isOwner && <button onClick={() => setChangeMode(!changeMode)}
                                className={s.toggleChangeMode}>{changeMode ? 'Отменить изменения' : 'Редактировать данные'}</button>}
        </div>
    );
};

export default ProfileInfoContacts;