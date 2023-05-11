import {ActionsTypes} from "./store-redux";

let initialState = {
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

type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_DIALOG_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.messageData,}],
            }
        default:
            return state;
    }
};
type DialogsActionType = ActionsTypes<typeof dialogsActions>

export const dialogsActions = {
    addDialogMessage: (messageData: string) => ({type: 'ADD_DIALOG_MESSAGE', messageData} as const)
}

export default dialogsReducer;