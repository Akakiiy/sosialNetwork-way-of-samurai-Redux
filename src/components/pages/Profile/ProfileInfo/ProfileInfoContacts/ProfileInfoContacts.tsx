import s from './ProfileInfoContacts.module.css';
import React, {useState} from "react";
import ProfileInfoForm from "../ProfileInfoForm/ProfileInfoForm";
import ProfileInfoText from "./ProfileTextInfo";
import {ProfileType} from "../../../../Redux/profile-reducer";
import {Button} from "antd";

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
            {isOwner && <Button style={{marginTop: '10px'}} danger={changeMode || false} onClick={changeChangeMode}>
                {changeMode ? 'Отменить изменения' : 'Редактировать данные'}
            </Button>}
        </div>
    );
};

export default ProfileInfoContacts;