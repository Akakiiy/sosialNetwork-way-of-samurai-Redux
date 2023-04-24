const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';

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

const reducerDialogs = (state = initialState, action) => {
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

export const addDialogMessage = (messageData) => {
    return {
        type: ADD_DIALOG_MESSAGE,
        messageData,
    }
};
export default reducerDialogs;