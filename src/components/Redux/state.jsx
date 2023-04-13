let state = {
    profilePage : {
        posts : [
            {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
            {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
        ],
    },
    dialogPage : {
        dialogs : [
            {id: 1, name: 'Ryan Gosling'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Artem'},
            {id: 5, name: 'Vladimir'},
        ],
        messages : [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are u?'},
            {id: 3, message: 'How is your way of the samurai?'},
        ],
    },
    sidebar: {
        friends : [
            {id: 1, name: 'Ryan Gosling'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Alex'},
        ],
    },
};

export default state;