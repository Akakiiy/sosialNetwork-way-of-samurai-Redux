import profileReducer, {addPost, deletePostByID} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, postMessage: 'Hi, how are u doing?', likesCount: 10},
        {id: 2, postMessage: 'It\'s my first post', likesCount: 20},
    ],
};

it('should add one more message in posts arr', function () {

    let action = addPost('new message');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it('should add message text in new posts object', function () {
    let action = addPost('new message');

    let newState = profileReducer(state, action);

    expect(newState.posts[2].postMessage).toBe('new message');
});

it('should decrement posts arr length on 1', function () {
    let action = deletePostByID(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(state.posts.length - 1);
});

it('should delete post by id', function () {
    let action = deletePostByID(1);

    let newState = profileReducer(state, action);

    expect(newState.posts[0].id).toBe(state.posts[1].id)
});