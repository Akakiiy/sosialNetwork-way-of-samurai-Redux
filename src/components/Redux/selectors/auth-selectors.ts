import {createSelector} from "reselect";
import {AppStateType} from "../store-redux";
const getUserId = (state: AppStateType) => {
    return state.auth.userId;
};
export const getUserIdSelector = createSelector(getUserId,
    (userId) => {
        return userId;
});

const getIsLogged = (state: AppStateType) => {
    return state.auth.isLogged;
};
export const getIsLoggedSelector = createSelector(getIsLogged,
    (isLogged) => {
    return isLogged;
});

const getLoadingErrorMessage = (state: AppStateType) => {
    return state.auth.loginErrorMessage;
};
export const getLoadingErrorMessageSelector = createSelector(getLoadingErrorMessage,
    (loadingErrorMessage) => {
    return loadingErrorMessage;
});

const getIsLoading = (state: AppStateType) => {
    return state.auth.isLoading;
};
export const getIsLoadingSelector = createSelector(getIsLoading,
    (isLoading) => {
    return isLoading;
});

const getCaptchaUrl = (state: AppStateType) => {
    return state.auth.captchaUrl;
};
export const getCaptchaUrlSelector = createSelector(getCaptchaUrl,
    (captchaUrl) => {
    return captchaUrl;
});

const getLogin = (state: AppStateType) => {
    return state.auth.login;
};

export const GetLoginSelector = createSelector(getLogin,
    (login) => {
    return login;
});