import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, savePhoto, setUserStatus, uploadUserProfile} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getProfileSelector, getStatusSelector} from "../Redux/selectors/profile-selectors";
import {getUserIdSelector} from "../Redux/selectors/auth-selectors";

const ProfileContainer = (props) => {
    let userId = props.match.params.userId; //вытаскиваем ID из URL

    const refreshProfile = () => {
        if (!userId) {
            userId = props.userId;
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
                 savePhoto={props.savePhoto}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        statusText: getStatusSelector(state),
        userId: getUserIdSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {uploadUserProfile, getUserStatus, setUserStatus, savePhoto}),
    withRouter,
    WithAuthLogged,
)(ProfileContainer);