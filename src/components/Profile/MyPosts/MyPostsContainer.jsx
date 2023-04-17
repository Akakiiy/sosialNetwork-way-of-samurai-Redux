import React from "react";
import {
    addPostActionCreator,
    changeNewPostTextareaActionConstructor,
} from "../../Redux/reducer-profile";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addNewPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const changeTextarea = (e) => {
        let text = e.target.value;
        props.store.dispatch(changeNewPostTextareaActionConstructor(text));
    };

    return <MyPosts posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}
                             addNewPost={addNewPost}
                             changeTextarea={changeTextarea} />
}

export default MyPostsContainer;