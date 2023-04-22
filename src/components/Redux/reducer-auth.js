import {apiServices} from "../../api/api";

const GET_AUTH_RESPONSE_IN_STATE = 'GET_AUTH_RESPONSE_IN_STATE';
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
        case GET_AUTH_RESPONSE_IN_STATE:
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

export const getAuthResponseInState = (userId, email, login) => {
    return {
        type: GET_AUTH_RESPONSE_IN_STATE,
        data: { userId, email, login },
    }
};

export const setUserIsLogged = (isLogged) => {
    return {
        type: USER_LOGGED,
        isLogged,
    }
};

export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        isLoading,
    }
};
export const autoLogIn = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        apiServices.axiosCheckLogin()
            .then(data => {
                dispatch(setUserIsLogged(false));
                dispatch(setLoading(false));
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(getAuthResponseInState(id, email, login));
                    dispatch(setUserIsLogged(true));
                }
            });
    }
};
export default reducerAuth;