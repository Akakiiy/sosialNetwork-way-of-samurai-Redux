import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} statusText={props.statusText} setUserStatus={props.setUserStatus} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;