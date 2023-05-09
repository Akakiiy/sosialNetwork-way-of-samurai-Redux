import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatus,
    ProfileType,
    savePhoto,
    setIsOwner,
    setUserStatus,
    uploadUserProfile
} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getIsOwnerSelector, getProfileSelector, getStatusSelector} from "../Redux/selectors/profile-selectors";
import {getUserIdSelector} from "../Redux/selectors/auth-selectors";
import {AppStateType} from "../Redux/store-redux";

type PropsType = MSTPType & MDTPType & OwnProps

const ProfileContainer: React.FC<PropsType> = (props) => {

    // @ts-ignore ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ ВНИМАНИЕ
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

type MSTPType = {
    profile: null | ProfileType,
    statusText: string
    userId: number | null
    isOwner: boolean
}
type MDTPType = {
    uploadUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    setUserStatus: () => void
    savePhoto: () => void
    setIsOwner: (isOwner: boolean) => void
}
type OwnProps = {}

const mapStateToProps = (state: AppStateType): MSTPType => {
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