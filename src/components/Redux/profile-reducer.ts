import {apiServices, photosRequests, profileInfoRequests, statusRequests} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPLOAD_USER_PROFILE = 'UPLOAD-USER-PROFILE';
const SET_STATUS = 'CHANGE_STATUS';
const DELETE_POST ='DELETE_POST';
const ADD_PHOTO = 'ADD_PHOTO';
const SET_IS_OWNER = 'SET_IS_OWNER';
const SET_USER_PROFILE_INFO = 'SET_USER_PROFILE_INFO';

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
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
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

const profileReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, postMessage: action.newPostText, likesCount: 210,}],
            }
        case UPLOAD_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                statusText: action.statusText,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== +action.postId)
            }
        case ADD_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: {...action.photos}} as ProfileType, //тут указана типизация, но так вроде делать нельзя
            }
        case SET_IS_OWNER:
            return {
                ...state,
                isOwner: action.isOwner,
            };
        case SET_USER_PROFILE_INFO:
            return {
                ...state,
                profile: {...state.profile, ...action.profileInfoData},
            }
        default :
            return state;
    }
};

type AddPostType = {
    type: typeof ADD_POST
    newPostText: string
}

export const addPost = (newPostText: string): AddPostType => {
    return {
        type: ADD_POST,
        newPostText,
    };
};

type DeletePostByIDType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePostByID = (postId: number): DeletePostByIDType => {
    return {
        type: DELETE_POST,
        postId,
    }
};

type SetUserProfileType = {
    type: typeof UPLOAD_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType) :SetUserProfileType => {
    return {
        type: UPLOAD_USER_PROFILE,
        profile,
    }
};
export const uploadUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await apiServices.axiosGetUserProfile(userId);

    dispatch(setUserProfile(response.data));
};

type SetProfileStatus = {
    type: typeof SET_STATUS
    statusText: string
}

export const setProfileStatus = (statusText: string): SetProfileStatus => {
    return {
        type: SET_STATUS,
        statusText
    }
};
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let request = await statusRequests.getUserStatus(userId);
    dispatch(setProfileStatus(request.data));
};
export const setUserStatus = (userStatusText: string) => async (dispatch: any) => {
    let request = await statusRequests.setUserStatus(userStatusText);
    if (request.data.resultCode === 0) {
        dispatch(setProfileStatus(userStatusText));
    }
};

type SetUserPhoto = {
    type: typeof ADD_PHOTO
    photos: PhotosType
}

export const setUserPhoto = (photos: PhotosType): SetUserPhoto => {
    return {
        type: ADD_PHOTO,
        photos,
    }
};
export const savePhoto = (photoFile: string) => async (dispatch: any) => {
    const response = await photosRequests.putPhoto(photoFile);

    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));
    }
};

type SetIsOwner = {
    type: typeof SET_IS_OWNER
    isOwner: boolean
}

export const setIsOwner = (isOwner: boolean): SetIsOwner => {
    return {
        type: SET_IS_OWNER,
        isOwner,
    }
};

type SetUserProfileInfoType = {
    type: typeof SET_USER_PROFILE_INFO
    profileInfoData: ProfileType
}

export const setUserProfileInfo = (profileInfoData: ProfileType): SetUserProfileInfoType => {
    return {
        type: SET_USER_PROFILE_INFO,
        profileInfoData,
    }
};
export const putUserProfileInfo = (profileInfoData: ProfileType) => async (dispatch: any) => {

    const response = await profileInfoRequests.setUserProfileInfo(profileInfoData);
    if (response.data.resultCode === 0) {
        dispatch(setUserProfileInfo(profileInfoData));
    } else {
        console.log(response.data.messages[0]);
    }
};

export default profileReducer;