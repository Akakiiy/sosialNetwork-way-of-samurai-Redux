import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state ,addPost, changeNewPostTextarea}) => {

    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts state={state} addPost={addPost} changeNewPostTextarea={changeNewPostTextarea}/>
        </div>
    )
}

export default Profile;