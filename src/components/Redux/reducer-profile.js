import {apiServices} from "../../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXTAREA = 'CHANGE-NEW-POST-TEXTAREA';
const UPLOAD_USER_PROFILE = 'UPLOAD-USER-PROFILE';
const CHANGE_STATUS = 'CHANGE_STATUS';


let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: null,
    statusText: 'I love Ryan Gosling :з',
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
        case CHANGE_STATUS:
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
export const changeProfileStatus = (statusText) => {
    return {
        type: CHANGE_STATUS,
        statusText
    }
}
export const uploadUserProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
    }
    apiServices.axiosGetUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        });
}


export default reducerProfile;