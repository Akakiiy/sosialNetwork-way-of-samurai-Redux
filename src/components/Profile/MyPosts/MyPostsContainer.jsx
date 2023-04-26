import React from "react";
import {addPost} from "../../Redux/reducer-profile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getNewPostTextSelector, getPostsSelector} from "../../Redux/selectors/profile-selectors";

const mapStateToProps = (state) => {
    return {
        posts: getPostsSelector(state),
        newPostText:  getNewPostTextSelector(state),
    };
};
export default connect(mapStateToProps, {addPost})(MyPosts)