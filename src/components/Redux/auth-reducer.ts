import {ResultCodeEnum} from "../../api/api";
import {ActionsTypes, ThunkType} from "./store-redux";
import {usersRequests} from "../../api/userRequests";
import {loginRequests} from "../../api/loginRequests";

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

const authReducer = (state: InitialStateType = initialState, action: ReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA_IN_STATE':
            return {
                ...state,
                ...action.data
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case 'SET_LOGIN_ERROR_MESSAGE':
            return {
                ...state,
                loginErrorMessage: action.loginErrorMessage
            }
        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default :
            return state;
    }
};
type ReducerActionsTypes = ActionsTypes<typeof authActions>

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ReducerActionsTypes>

const authActions = {
    setUserDataInState: (userId: number | null,
                          email: string | null,
                          login: string | null,
                          isLogged: boolean) => ({ type: 'SET_USER_DATA_IN_STATE', data: {userId, email, login, isLogged}} as const),
    setLoading: (isLoading: boolean) => ({type: 'SET_LOADING', isLoading} as const),
    setLoginMessageError: (loginErrorMessage: string | null) => ({type: 'SET_LOGIN_ERROR_MESSAGE', loginErrorMessage} as const),
    setCaptcha: (captchaUrl: string) => ({type: 'SET_CAPTCHA_URL', captchaUrl} as const)
};

export const setAuthUserData = (): ThunkType<ReducerActionsTypes> => async (dispatch) => {
    dispatch(authActions.setLoading(true));
    let data = await usersRequests.axiosCheckLogin();

    dispatch(authActions.setLoading(false));
    if (data.resultCode === ResultCodeEnum.Success) {
        const {id, email, login} = data.data;
        dispatch(authActions.setUserDataInState(id, email, login, true));
    }
};

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export const login = ({email, password, rememberMe, captcha}: LoginType): ThunkType<ReducerActionsTypes> => async (dispatch) => {
    dispatch(authActions.setLoading(true));
    let response = await loginRequests.axiosLoginUser({email, password, rememberMe, captcha});

    dispatch(authActions.setLoading(false));
    switch (response.data.resultCode) {
        case ResultCodeEnum.Success:
            dispatch(authActions.setLoginMessageError(null));
            dispatch(authActions.setCaptcha(''));
            dispatch(setAuthUserData());
            return;
        case ResultCodeEnum.CaptchaError:
            dispatch(getCaptchaUrlFromSelver());
            return;
        case ResultCodeEnum.Error:
            dispatch(authActions.setLoginMessageError(response.data.messages[0]));
            return
    }
};
export const logout = (): ThunkType<ReducerActionsTypes> => async (dispatch) => {
    dispatch(authActions.setLoading(true));
    let response = await loginRequests.axiosLogeOutUser();

    dispatch(authActions.setLoading(false));
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(authActions.setUserDataInState(null, null, null, false));
    }
};
export const getCaptchaUrlFromSelver = (): ThunkType<ReducerActionsTypes> => async (dispatch) => {
    let response = await loginRequests.getLoginCaptcha();
    dispatch(authActions.setCaptcha(response.data.url));
};
export default authReducer;