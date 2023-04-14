let store = {
    _callSubscriber () {
        console.log('Если есть сообщение в консоли, значит нарушен ПАТЕРН НАБЛЮДАТЕЛЯ');
    },
    _state : {
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
    },
    getState () {
        return this._state;
    },
    addPost (postMessage) {
        let newPostMessage = {
            id: 3,
            postMessage: postMessage,
            likesCount: 210,
        }
        this._state.profilePage.posts.push(newPostMessage);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    changeNewPostTextarea (text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    addDialogMessage (dialogMessage) {
        let newDialogMessage = {
            id: 4,
            message: dialogMessage,
        };
        this._state.dialogPage.messages.push(newDialogMessage);
        this._state.dialogPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    changeDialogMessage (dialogMessageText) {
        this._state.dialogPage.newMessageText = dialogMessageText;
        this._callSubscriber(this._state);
    },
};

export default store;