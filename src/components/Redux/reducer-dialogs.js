const addDialogMessage = 'ADD-DIALOG-MESSAGE';
const changeDialogMessage = 'CHANGE-DIALOG-MESSAGE';

const reducerDialogs = (state, action) => {
    switch (action.type) {
        case addDialogMessage:
            let newDialogMessage = {
                id: 4,
                message: state.newMessageText,
            };

            state.messages.push(newDialogMessage);
            state.newMessageText = '';
            return state;
        case changeDialogMessage:
            state.newMessageText = action.dialogMessageText;
            return state;
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