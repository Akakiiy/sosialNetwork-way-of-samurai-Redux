import {createSelector} from "reselect";
import {AppStateType} from "../store-redux";

const getDialogs = (state: AppStateType) => {
    return state.dialogPage.dialogs;
};
export const getDialogsSelector = createSelector(getDialogs,
    (dialogs) => {
    return dialogs;
});

const getMessages = (state: AppStateType) => {
    return state.dialogPage.messages;
};
export const getMessagesSelector = createSelector(getMessages,
    (messages) => {
    return messages;
});

const getNewMessageText = (state: AppStateType) => {
    return state.dialogPage.messages[state.dialogPage.messages.length - 1].message;
};
export const GetNewMessageTextSelector = createSelector(getNewMessageText,
    (newMessageText) => {
    return newMessageText;
});
