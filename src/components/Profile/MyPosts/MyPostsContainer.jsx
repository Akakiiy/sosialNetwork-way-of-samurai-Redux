import React from "react";
import {addPost} from "../../Redux/reducer-profile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:  state.profilePage.newPostText,
    };
};
export default connect(mapStateToProps, {addPost})(MyPosts)