import {apiServices, loginRequests} from "../../api/api";

const SET_USER_DATA_IN_STATE = 'SET_USER_DATA_IN_STATE';
const USER_LOGGED = 'USER_LOGGED';
const SET_LOADING = 'SET_LOADING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
    isLoading: false,
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
export const login = ({email, password, rememberMe}) => (dispatch) => {
    dispatch(setLoading(true));
    loginRequests.axiosLoginUser({email, password, rememberMe})
        .then(response => {
            dispatch(setLoading(false));
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData());
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