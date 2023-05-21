import {AppStateType} from "../store-redux";
import {createSelector} from "reselect";
import {MessageType} from "../../../api/chat-api";

const getMessages = (state: AppStateType) => {
    return state.chatPage.messages;
}
export const getMessagesSelector = createSelector(getMessages,
    (messages: MessageType[]) => {
    return messages
})

const getChatStatus = (state: AppStateType) => {
    return state.chatPage.chatStatus;
}
export const getChatStatusSelector = createSelector(getChatStatus,
    (chatStatus) => {
    return chatStatus
})