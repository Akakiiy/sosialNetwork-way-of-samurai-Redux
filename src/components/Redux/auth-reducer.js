import {apiServices, loginRequests} from "../../api/api";

const SET_USER_DATA_IN_STATE = 'SET_USER_DATA_IN_STATE';
const USER_LOGGED = 'USER_LOGGED';
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
    isLoading: false,
    loginErrorMessage: null,
    captchaUrl: '',
}

const authReducer = (state = initialState, action) => {
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
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
export const setAuthUserData = () => async (dispatch) => {
    dispatch(setLoading(true));
    let data = await apiServices.axiosCheckLogin();

    dispatch(setLoading(false));
    if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUserDataInState(id, email, login, true));
    }
};
const setLoginMessageError = (loginErrorMessage) => {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        loginErrorMessage,
    }
};
export const login = ({email, password, rememberMe, captcha}) => async (dispatch) => {
    dispatch(setLoading(true));
    let response = await loginRequests.axiosLoginUser({email, password, rememberMe, captcha});

    dispatch(setLoading(false));
    switch (response.data.resultCode) {
        case 0:
            dispatch(setLoginMessageError(null));
            dispatch(setCaptcha(''));
            dispatch(setAuthUserData());
            return;
        case 10:
            dispatch(getCaptchaUrlFromSelver());
            return;
        default:
            dispatch(setLoginMessageError(response.data.messages[0]));
            return
    }
};
export const logout = () => async (dispatch) => {
    dispatch(setLoading(true));
    let response = await loginRequests.axiosLogeOutUser();

    dispatch(setLoading(false));
    if (response.data.resultCode === 0) {
        dispatch(setUserDataInState(null, null,null, false));
    }
};
export const setCaptcha = (captchaUrl) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl,
    }
};
export const getCaptchaUrlFromSelver = () => async (dispatch) => {
    let response = await loginRequests.getLoginCaptcha();
    dispatch(setCaptcha(response.data.url));
};
export default authReducer;