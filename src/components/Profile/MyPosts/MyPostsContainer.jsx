import React from "react";
import {
    addPostActionCreator,
    changeNewPostTextareaActionConstructor,
} from "../../Redux/reducer-profile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:  state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeTextarea: (e) => {
            let text = e.target.value;
            dispatch(changeNewPostTextareaActionConstructor(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;