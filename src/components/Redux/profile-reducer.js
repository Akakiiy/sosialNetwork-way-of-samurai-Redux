import {apiServices, photosRequests, statusRequests} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPLOAD_USER_PROFILE = 'UPLOAD-USER-PROFILE';
const SET_STATUS = 'CHANGE_STATUS';
const DELETE_POST ='DELETE_POST';
const ADD_PHOTO = 'ADD_PHOTO';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    profile: null,
    statusText: '',
};

const profileReducer = (state = initialState, action) => {
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
                profile: {...state.profile, photos: {...action.photos}}
            }
        default :
            return state;
    }
};
export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText,
    };
};
export const deletePostByID = (postId) => {
    return {
        type: DELETE_POST,
        postId,
    }
};
export const setUserProfile = (profile) => {
    return {
        type: UPLOAD_USER_PROFILE,
        profile,
    }
};
export const uploadUserProfile = (userId) => async (dispatch) => {
    let response = await apiServices.axiosGetUserProfile(userId);

    dispatch(setUserProfile(response.data));
};
export const setProfileStatus = (statusText) => {
    return {
        type: SET_STATUS,
        statusText
    }
};
export const getUserStatus = (userId) => async (dispatch) => {
    let request = await statusRequests.getUserStatus(userId);
    dispatch(setProfileStatus(request.data));
};
export const setUserStatus = (userStatusText) => async (dispatch) => {
    let request = await statusRequests.setUserStatus(userStatusText);
    if (request.data.resultCode === 0) {
        dispatch(setProfileStatus(userStatusText));
    }
};
export const setUserPhoto = (photos) => {
    return {
        type: ADD_PHOTO,
        photos,
    }
};
export const savePhoto = (photoFile) => async (dispatch) => {
    const response = await photosRequests.putPhoto(photoFile);

    if (response.data.resultCode === 0) {
        dispatch(setUserPhoto(response.data.data.photos));
    }
};

export default profileReducer;