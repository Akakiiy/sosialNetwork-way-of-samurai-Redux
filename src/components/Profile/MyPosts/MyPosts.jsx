import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import MyPostReduxForm from "./MyPostForm/MyPostForm";

const MyPosts = (props) => {

    const postsElements = props.posts.map((p, i) => <Post key={i} id={p.id} message={p.postMessage} likesCount={p.likesCount} />);

    return (
        <div className={s.postsContainer}>
            <h3>My posts</h3>
            <MyPostReduxForm onSubmit={props.addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;