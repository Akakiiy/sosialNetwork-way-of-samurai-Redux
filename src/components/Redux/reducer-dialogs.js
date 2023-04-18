const addDialogMessage = 'ADD-DIALOG-MESSAGE';
const changeDialogMessage = 'CHANGE-DIALOG-MESSAGE';

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
    newMessageText: '',
};

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case addDialogMessage:
            let newDialogMessage = {
                id: 4,
                message: state.newMessageText,
            };
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newDialogMessage],
            }
        case changeDialogMessage:
            return {
                ...state,
                newMessageText: action.dialogMessageText
            }
        default:
            return state;
    }
};

export const addDialogMessageActionConstructor = () => {
    return {type: addDialogMessage}
};
export const changeDialogMessageActionConstructor = (dialogMessageText) => {
    return {
        type: changeDialogMessage,
        dialogMessageText: dialogMessageText,
    }
};

export default reducerDialogs;