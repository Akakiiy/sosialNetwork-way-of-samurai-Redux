import {apiServices, statusRequests} from "../../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXTAREA = 'CHANGE-NEW-POST-TEXTAREA';
const UPLOAD_USER_PROFILE = 'UPLOAD-USER-PROFILE';
const SET_STATUS = 'CHANGE_STATUS';


let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: null,
    statusText: '',
};

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostMessage = {
                id: 3,
                postMessage: state.newPostText,
                likesCount: 210,
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPostMessage],
            }
        case CHANGE_NEW_POST_TEXTAREA:
            return {
                ...state,
                newPostText: action.newPostTextareaText,
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
        default :
            return state;
    }
};

export const addPostAC = () => {
    return {type: ADD_POST};
};
export const changeNewPostTextareaAC = (newPostTextareaText) => {
    return {
        type: CHANGE_NEW_POST_TEXTAREA,
        newPostTextareaText
    }
};
export const setUserProfile = (profile) => {
    return {
        type: UPLOAD_USER_PROFILE,
        profile,
    }
};
export const uploadUserProfile = (userId) => (dispatch) => {
    apiServices.axiosGetUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        });
};
export const setProfileStatus = (statusText) => {
    return {
        type: SET_STATUS,
        statusText
    }
};
export const getUserStatus = (userId) => (dispatch) => {
    statusRequests.getUserStatus(userId)
        .then(request => {
            dispatch(setProfileStatus(request.data));
        });
};
export const setUserStatus = (userStatusText) => (dispatch) => {
    statusRequests.setUserStatus(userStatusText)
        .then(request => {
            if (request.data.resultCode === 0) {
                dispatch(setProfileStatus(userStatusText));
            }
    });
};


export default reducerProfile;