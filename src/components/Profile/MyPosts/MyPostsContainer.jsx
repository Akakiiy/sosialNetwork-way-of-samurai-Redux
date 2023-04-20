import React from "react";
import {
    addPostAC,
    changeNewPostTextareaAC,
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
            dispatch(changeNewPostTextareaAC(text));
        },
        addNewPost: () => {
            dispatch(addPostAC());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)