import {apiServices, loginRequests} from "../../api/api";

const SET_USER_DATA_IN_STATE = 'SET_USER_DATA_IN_STATE';
const USER_LOGGED = 'USER_LOGGED';
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
    isLoading: false,
    loginErrorMessage: null,
}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA_IN_STATE:
            return {
                ...state,
                ...action.data
            }
        case USER_LOGGED:
            return {
                ...state,
                isLogged: action.isLogged,
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case SET_LOGIN_ERROR_MESSAGE:
            return {
                ...state,
                loginErrorMessage: action.loginErrorMessage
            }
        default :
            return state;
    }
};

export const setUserDataInState = (userId, email, login, isLogged) => {
    return {
        type: SET_USER_DATA_IN_STATE,
        data: { userId, email, login, isLogged },
    }
};
export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        isLoading,
    }
};
export const setAuthUserData = () => (dispatch) => {
    dispatch(setLoading(true));
    apiServices.axiosCheckLogin()
        .then(data => {
            dispatch(setLoading(false));
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setUserDataInState(id, email, login, true));
            }
        });
};
const setLoginMessageError = (loginErrorMessage) => {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        loginErrorMessage,
    }
}
export const login = ({email, password, rememberMe}) => (dispatch) => {
    dispatch(setLoading(true));
    loginRequests.axiosLoginUser({email, password, rememberMe})
        .then(response => {
            dispatch(setLoading(false));
            if (response.data.resultCode === 0) {
                dispatch(setLoginMessageError(null));
                dispatch(setAuthUserData());
            } else {
                dispatch(setLoginMessageError(response.data.messages[0]));
            }
        });
};
export const logout = () => (dispatch) => {
    dispatch(setLoading(true));
    loginRequests.axiosLogeOutUser()
        .then(response => {
            dispatch(setLoading(false));
            if (response.data.resultCode === 0) {
                dispatch(setUserDataInState(null, null,null, false));
            }
        });
};
export default reducerAuth;