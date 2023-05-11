import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import React from "react";
import {ProfileType} from "../Redux/profile-reducer";

type PropsType = {
    profile: null | ProfileType,
    isOwner: boolean
    statusText: string
    setUserStatus: (userStatusText: string) => void
    savePhoto: (photoFile: File) => void
}

const Profile: React.FC<PropsType> = (props) => {

    return (
        <div className={s.content}>
            {
                !props.profile
                    ? <Preloader/>
                    : <ProfileInfo profile={props.profile}
                                   isOwner={props.isOwner}
                                   statusText={props.statusText}
                                   setUserStatus={props.setUserStatus}
                                   savePhoto={props.savePhoto}/>
            }

            <MyPostsContainer />
        </div>
    )
}

export default Profile;