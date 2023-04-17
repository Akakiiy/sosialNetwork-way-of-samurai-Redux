const addPost = 'ADD-POST';
const changeNewPostTextarea = 'CHANGE-NEW-POST-TEXTAREA';

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
    newPostText: '',
};

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPostMessage = {
                id: 3,
                postMessage: state.newPostText,
                likesCount: 210,
            }

            state.posts.push(newPostMessage);
            state.newPostText = '';
            return state
        case changeNewPostTextarea:
            state.newPostText = action.newPostTextareaText;
            return state;
        default :
            return state;
    }
};

export const addPostActionCreator = () => {
    return {type: addPost};
};
export const changeNewPostTextareaActionConstructor = (newPostTextareaText) => {
    return {
        type: changeNewPostTextarea,
        newPostTextareaText: newPostTextareaText,
    }
};

export default reducerProfile;