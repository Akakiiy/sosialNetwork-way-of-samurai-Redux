import {ResultCodeEnum} from "../../api/api";
import {ActionsTypes, ThunkType} from "./store-redux";
import {usersRequests} from "../../api/userRequests";
import {photosRequests, profileInfoRequests, statusRequests} from "../../api/profileRequests";

type InitialStateType = {
    posts: PostsType
    profile: null | ProfileType,
    statusText: string,
    isOwner: boolean,
}
type PostsType = Array<PostType>
type PostType = {
    id: number
    postMessage: string
    likesCount: number
}
export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string | null
    aboutMe: string
    contacts: ContactsType
    photos?: PhotosType
}
export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    profile: null,
    statusText: '',
    isOwner: false,
};

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, {id: 3, postMessage: action.postMessage, likesCount: 210,}],
            }
        case 'UPLOAD_USER_PROFILE':
            return {
                ...state,
                profile: action.profile,
            }
        case 'SET_STATUS':
            return {
                ...state,
                statusText: action.statusText,
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== +action.postId)
            }
        case 'ADD_PHOTO':
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}} as ProfileType, //тут указана типизация, но так вроде делать нехорошо
            }
        case 'SET_USER_PROFILE_INFO':
            return {
                ...state,
                profile: {...state.profile, ...action.profileInfoData},
            }
        case 'SET_IS_OWNER':
            return {
                ...state,
                isOwner: action.isOwner
            }
        default :
            return state;
    }
};
type ProfileActionType = ActionsTypes<typeof profileActions>

export const profileActions = {
    addPost: (postMessage: string) => ({type: 'ADD_POST', postMessage} as const),
    deletePostByID: (postId: number) => ({type: 'DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'UPLOAD_USER_PROFILE', profile} as const),
    setProfileStatus: (statusText: string) => ({type: 'SET_STATUS', statusText} as const),
    setUserPhoto: (photos: PhotosType) => ({type: 'ADD_PHOTO', photos} as const),
    setUserProfileInfo: (profileInfoData: ProfileType) => ({type: 'SET_USER_PROFILE_INFO', profileInfoData} as const),
    setIsOwner: (isOwner: boolean) => ({type: 'SET_IS_OWNER', isOwner} as const)
}

export const uploadUserProfile = (userId: number): ThunkType<ProfileActionType> => async (dispatch) => {
    let response = await usersRequests.axiosGetUserProfile(userId);

    dispatch(profileActions.setUserProfile(response.data));
};
export const getUserStatus = (userId: number): ThunkType<ProfileActionType> => async (dispatch) => {
    let request = await statusRequests.getUserStatus(userId);
    dispatch(profileActions.setProfileStatus(request.statusText));
};
export const setUserStatus = (userStatusText: string): ThunkType<ProfileActionType> => async (dispatch) => {
    let request = await statusRequests.setUserStatus(userStatusText);
    if (request.data.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.setProfileStatus(userStatusText));
    }
};
export const savePhoto = (photoFile: File): ThunkType<ProfileActionType> => async (dispatch) => {
    const response = await photosRequests.putPhoto(photoFile);

    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.setUserPhoto(response.data.data.photos));
    }
};
export const putUserProfileInfo = (profileInfoData: ProfileType): ThunkType<ProfileActionType> => async (dispatch) => {

    const response = await profileInfoRequests.setUserProfileInfo(profileInfoData);
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.setUserProfileInfo(profileInfoData));
    }
};

export default profileReducer;