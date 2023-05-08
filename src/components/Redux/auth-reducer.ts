import {apiServices, loginRequests} from "../../api/api";

const SET_USER_DATA_IN_STATE = 'SET_USER_DATA_IN_STATE';
const SET_LOADING = 'SET_LOADING';
const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isLogged: boolean
    isLoading: boolean
    loginErrorMessage: string | null
    captchaUrl: string
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
    isLoading: false,
    loginErrorMessage: null,
    captchaUrl: '',
}

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
    userId: number | null
    email: string | null
    login: string | null
    isLogged: boolean
}

export const setUserDataInState = (userId: number | null, email: string | null, login: string | null, isLogged: boolean): SetUserDataInStateType => {
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
export const setAuthUserData = () => async (dispatch: any) => {
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
    loginErrorMessage: string | null
}

const setLoginMessageError = (loginErrorMessage: string | null): SetLoginMessageError => {
    return {
        type: SET_LOGIN_ERROR_MESSAGE,
        loginErrorMessage,
    }
};

type LoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const login = ({email, password, rememberMe, captcha}: LoginType) => async (dispatch :any) => {
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
export const logout = () => async (dispatch: any) => {
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
export const getCaptchaUrlFromSelver = () => async (dispatch: any) => {
    let response = await loginRequests.getLoginCaptcha();
    dispatch(setCaptcha(response.data.url));
};
export default authReducer;