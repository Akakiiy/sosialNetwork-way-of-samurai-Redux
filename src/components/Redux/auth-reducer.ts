import {apiServices, loginRequests} from "../../api/api";

const SET_USER_DATA_IN_STATE = 'SET_USER_DATA_IN_STATE';
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogged: false,
    isLoading: false,
    loginErrorMessage: null as string | null,
    captchaUrl: '',
}

type InitialStateType = typeof initialState;

const authReducer = (state: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA_IN_STATE:
            return {
                ...state,
                ...action.data
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

type SetUserDataInStateType = {
    type: typeof SET_USER_DATA_IN_STATE
    data: SetUserDataInStateDataType
}
type SetUserDataInStateDataType = {
    userId: number
    email: string
    login: string
    isLogged: boolean
}

export const setUserDataInState = (userId: number, email: string, login: string, isLogged: boolean): SetUserDataInStateType => {
    return {
        type: SET_USER_DATA_IN_STATE,
        data: { userId, email, login, isLogged },
    }
};

type SetLoadingType = {
    type: typeof SET_LOADING
    isLoading: boolean
}

export const setLoading = (isLoading: boolean): SetLoadingType => {
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

type SetLoginMessageError = {
    type: typeof SET_LOGIN_ERROR_MESSAGE
    loginErrorMessage: string
}

const setLoginMessageError = (loginErrorMessage: string): SetLoginMessageError => {
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

type SetCaptcha = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string
}

export const setCaptcha = (captchaUrl: string): SetCaptcha => {
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