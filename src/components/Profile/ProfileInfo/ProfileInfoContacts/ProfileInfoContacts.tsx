import s from './ProfileInfoContacts.module.css';
import React, {useState} from "react";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfileInfoText from "./ProfileTextInfo";
import {ProfileType} from "../../../Redux/profile-reducer";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
}

const haveNoInfo: string = 'ничего не указано';
const ProfileInfoContacts: React.FC<PropsType> = ({profile, isOwner}) => {
    const [changeMode, setChangeMode] = useState(false);

    const changeChangeMode = () => {
        setChangeMode(!changeMode)
    }

    return (
        <div className={s.profileInfo}>
            {
                changeMode
                    ? <ProfileInfoForm contacts={profile.contacts}
                                       haveNoInfo={haveNoInfo}
                                       lookingForAJobDescription={profile.lookingForAJobDescription}
                                       lookingForAJob={profile.lookingForAJob}
                                       aboutMe={profile.aboutMe}
                                       changeChangeMode={changeChangeMode}/>
                    : <ProfileInfoText contacts={profile.contacts}
                                       haveNoInfo={haveNoInfo}
                                       lookingForAJobDescription={profile.lookingForAJobDescription}
                                       lookingForAJob={profile.lookingForAJob}
                                       aboutMe={profile.aboutMe} />
            }
            {isOwner && <button onClick={changeChangeMode}
                                className={s.toggleChangeMode}>{changeMode ? 'Отменить изменения' : 'Редактировать данные'}</button>}
        </div>
    );
};

export default ProfileInfoContacts;