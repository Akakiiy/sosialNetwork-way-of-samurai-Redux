import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state , dispatch}) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts state={state} dispatch={dispatch} />
        </div>
    )
}

export default Profile;