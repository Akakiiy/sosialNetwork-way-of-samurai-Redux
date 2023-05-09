const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';

type InitialStateType = {
    dialogs: DialogsType
    messages: MessagesType
}
type DialogsType = Array<DialogType>
type MessagesType = Array<MessageType>
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState: InitialStateType = {
    dialogs: [
        {id: 1, name: 'Ryan Gosling'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Artem'},
        {id: 5, name: 'Vladimir'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'How is your way of samurai?'},
    ],
};

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.messageData,}],
            }
        default:
            return state;
    }
};
type ActionType = AddDialogMessageType

type AddDialogMessageType = {
    type: typeof ADD_DIALOG_MESSAGE
    messageData: string
}

export const addDialogMessage = (messageData: string): AddDialogMessageType => {
    return {
        type: ADD_DIALOG_MESSAGE,
        messageData,
    }
};
export default dialogsReducer;