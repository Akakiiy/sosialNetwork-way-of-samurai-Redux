import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";

let store = {
    _state: {
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

    _callSubscriber() {
        console.log('Если есть сообщение в консоли, значит нарушен ПАТЕРН НАБЛЮДАТЕЛЯ');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        reducerProfile(this._state.profilePage, action);
        reducerDialogs(this._state.dialogPage, action);
        reducerSidebar(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;