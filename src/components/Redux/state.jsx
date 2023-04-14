let rerenderEntireTree = () => {
    console.log('Если есть сообщение в консоли, значит нарушен ПАТЕРН НАБЛЮДАТЕЛЯ');
};

let state = {
    profilePage: {
        posts: [
            {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
            {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
        ],
        newPostText: '',
    },
    dialogPage: {
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
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Ryan Gosling'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Alex'},
        ],
    },
};

export const addPost = (postMessage) => {
    let newPostMessage = {
        id: 3,
        postMessage: postMessage,
        likesCount: 210,
    }
    state.profilePage.posts.push(newPostMessage);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const changeNewPostTextarea = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};

export const addDialogMessage = (dialogMessage) => {
    let newDialogMessage = {
        id: 4,
        message: dialogMessage,
    };
    state.dialogPage.messages.push(newDialogMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const changeDialogMessage = (dialogMessageText) => {
    state.dialogPage.newMessageText = dialogMessageText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;