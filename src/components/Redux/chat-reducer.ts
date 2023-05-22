import {chatAPI, MessageType} from "../../api/chat-api";
import {ActionsTypes, ThunkType} from "./store-redux";
import {Dispatch} from "redux";

type InitialValuesType = {
    messages: MessageType[],
    chatStatus: 'pending' | 'error' | 'open'
}

const initialValues: InitialValuesType = {
    messages: [],
    chatStatus: 'pending',
}

export const chatReducer = (state: InitialValuesType = initialValues, action: ChatActionType): InitialValuesType => {
    switch (action.type) {
        case 'GET_NEW_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.messages].slice(-100),
            }
        case 'RESET_MESSAGES':
            return {
                ...state,
                messages: [],
            }
        case 'SET_STATUS':
            return {
                ...state,
                chatStatus: action.chatStatus
            }
        default:
            return state
    }
};

type ChatActionType = ActionsTypes<typeof chatActions>

export const chatActions = {
    getNewMessages: (messages: MessageType[]) => ({type: 'GET_NEW_MESSAGES', messages: messages} as const),
    resetMessages: () => ({type: 'RESET_MESSAGES'} as const),
    setStatus: (chatStatus: 'pending' | 'error' | 'open') => ({type: 'SET_STATUS', chatStatus} as const),
}

let _newMessageHandler: ((message: MessageType[]) => void) | null = null
let newMessageHandler = (dispatch: Dispatch):((message: MessageType[]) => void)  => {
    if (_newMessageHandler === null) {
        return _newMessageHandler = (messages: MessageType[]) => {
            dispatch(chatActions.getNewMessages(messages));
        }
    }
    return _newMessageHandler;
}

export const startMessagesListening = (): ThunkType<ChatActionType> => (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('messages', newMessageHandler(dispatch));
}
export const stopMessagesListening = (): ThunkType<ChatActionType> => (dispatch) => {
    dispatch(chatActions.resetMessages())
    chatAPI.unsubscribe('messages', newMessageHandler(dispatch));
    chatAPI.stop();
}
const newStatusHandler = (dispatch: Dispatch) => (status: 'pending' | 'error' | 'open') => dispatch(chatActions.setStatus(status))
export const startStatusListening = (): ThunkType<ChatActionType> => (dispatch) => {
    chatAPI.subscribe('status-changing', newStatusHandler(dispatch));
}
export const stopStatusListening = (): ThunkType<ChatActionType> => (dispatch) => {
    chatAPI.unsubscribe('status-changing', newStatusHandler(dispatch));
}
export const sendMessage = (message: string): ThunkType<ChatActionType> => () => {
    chatAPI.sendMessage(message)
}