import {apiServices, statusRequests} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPLOAD_USER_PROFILE = 'UPLOAD-USER-PROFILE';
const SET_STATUS = 'CHANGE_STATUS';


let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    profile: null,
    statusText: '',
};

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, postMessage: action.newPostTextData.newPostText, likesCount: 210,}],
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

export const addPost = (newPostTextData) => {
    return {
        type: ADD_POST,
        newPostTextData,
    };
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