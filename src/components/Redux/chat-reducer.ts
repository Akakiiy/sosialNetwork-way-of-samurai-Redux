import {chatAPI, MessageType} from "../../api/chat-api";
import {ActionsTypes, ThunkType} from "./store-redux";
import {Dispatch} from "redux";

type InitialValuesType = {
    messages: MessageType[],
}

const initialValues = {
    messages: []
}

export const chatReducer = (state: InitialValuesType = initialValues, action: ChatActionType): InitialValuesType => {
    switch (action.type) {
        case 'GET_NEW_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.messages],
            }
        default:
            return state
    }
};

type ChatActionType = ActionsTypes<typeof chatActions>

const chatActions = {
    getNewMessages: (messages: MessageType[]) => ({type: 'GET_NEW_MESSAGES', messages: messages} as const),
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
    chatAPI.subscribe('messages', newMessageHandler(dispatch));
    chatAPI.stop();
}
export const sendMessage = (message: string): ThunkType<ChatActionType> => () => {
    chatAPI.sendMessage(message)
}