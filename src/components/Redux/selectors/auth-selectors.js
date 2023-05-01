import {createSelector} from "reselect";
const getUserId = (state) => {
    return state.auth.userId;
};
export const getUserIdSelector = createSelector(getUserId,
    (userId) => {
        return userId;
});

const getIsLogged = (state) => {
    return state.auth.isLogged;
};
export const getIsLoggedSelector = createSelector(getIsLogged,
    (isLogged) => {
    return isLogged;
});

const getLoadingErrorMessage = (state) => {
    return state.auth.loginErrorMessage;
};
export const getLoadingErrorMessageSelector = createSelector(getLoadingErrorMessage,
    (loadingErrorMessage) => {
    return loadingErrorMessage;
});

const getIsLoading = (state) => {
    return state.auth.isLoading;
};
export const getIsLoadingSelector = createSelector(getIsLoading,
    (isLoading) => {
    return isLoading;
});

const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl;
};
export const getCaptchaUrlSelector = createSelector(getCaptchaUrl,
    (captchaUrl) => {
    return captchaUrl;
});