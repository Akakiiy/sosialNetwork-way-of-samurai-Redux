import React, {ComponentType, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getUserStatus,
    profileActions,
    ProfileType,
    savePhoto,
    setUserStatus,
    uploadUserProfile
} from "../Redux/profile-reducer";
import {useParams} from "react-router-dom";
import {getIsOwnerSelector, getProfileSelector, getStatusSelector} from "../Redux/selectors/profile-selectors";
import {getUserIdSelector} from "../Redux/selectors/auth-selectors";
import {AppStateType} from "../Redux/store-redux";
import {ThunkDispatch} from "redux-thunk";

type PropsType = {}

export const ProfileContainer: React.FC<PropsType> = () => {

    const profile: null | ProfileType = useSelector(getProfileSelector);
    const statusText: string = useSelector(getStatusSelector);
    const userCurrentId: number | null = useSelector(getUserIdSelector);
    const isOwner: boolean = useSelector(getIsOwnerSelector);

    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch()
    const uploadUserProfileFunc = (userId: number) => {
        dispatch(uploadUserProfile(userId))
    }
    const getUserStatusFunc = (userId: number) => {
        dispatch(getUserStatus(userId))
    }
    const setUserStatusFunc = (userStatusText: string) => {
        dispatch(setUserStatus(userStatusText))
    }
    const savePhotoFunc = (photoFile: File) => {
        dispatch(savePhoto(photoFile))
    }
    const setIsOwnerFunc = (isOwner: boolean) => {
        dispatch(profileActions.setIsOwner(isOwner))
    }

    const params = useParams();
    let newUserId: number | null;

    const refreshProfile = () => {
        if (params.userId === undefined) {
            newUserId = userCurrentId;
            setIsOwnerFunc(true);
        } else {
            newUserId = Number(params.userId)
            setIsOwnerFunc(false);
        }
        uploadUserProfileFunc(newUserId as number);
        getUserStatusFunc(newUserId as number);
    }
    useEffect(() => {
        refreshProfile();
    }, [params.userId]);

    return (
        <Profile profile={profile}
                 statusText={statusText}
                 setUserStatus={setUserStatusFunc}
                 savePhoto={savePhotoFunc}
                 isOwner={isOwner}/>
    )
}