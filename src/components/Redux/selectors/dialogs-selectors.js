import {createSelector} from "reselect";

const getDialogs = (state) => {
    return state.dialogPage.dialogs;
};
export const getDialogSelector = createSelector(getDialogs,
    (dialogs) => {
    return dialogs;
});

const getMessages = (state) => {
    return state.dialogPage.messages;
};
export const getMessagesSelector = createSelector(getMessages,
    (messages) => {
    return messages;
});

const getNewMessageText = (state) => {
    return state.dialogPage.newMessageText;
};
export const GetNewMessageTextSelector = createSelector(getNewMessageText,
    (newMessageText) => {
    return newMessageText;
});
