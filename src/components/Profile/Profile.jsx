import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import React from "react";

const Profile = (props) => {

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