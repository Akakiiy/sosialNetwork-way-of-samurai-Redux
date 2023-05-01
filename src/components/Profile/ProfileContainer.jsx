import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, savePhoto, setIsOwner, setUserStatus, uploadUserProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getIsOwnerSelector, getProfileSelector, getStatusSelector} from "../Redux/selectors/profile-selectors";
import {getUserIdSelector} from "../Redux/selectors/auth-selectors";

const ProfileContainer = (props) => {
    let userId = props.match.params.userId; //вытаскиваем ID из URL

    const refreshProfile = () => {
        if (!userId) {
            userId = props.userId;
            props.setIsOwner(true);
        } else {
            props.setIsOwner(false);
        }
        props.uploadUserProfile(userId);
        props.getUserStatus(userId);
    }

    useEffect(() => {
        refreshProfile();
    }, [userId]);

    return (
        <Profile profile={props.profile}
                 statusText={props.statusText}
                 setUserStatus={props.setUserStatus}
                 savePhoto={props.savePhoto}
                 isOwner={props.isOwner}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        statusText: getStatusSelector(state),
        userId: getUserIdSelector(state),
        isOwner: getIsOwnerSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {uploadUserProfile, getUserStatus, setUserStatus, savePhoto, setIsOwner}),
    withRouter,
    WithAuthLogged,
)(ProfileContainer);