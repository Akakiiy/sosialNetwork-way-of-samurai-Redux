import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map((p, i) => <Post key={i} id={p.id} message={p.postMessage} likesCount={p.likesCount} />);

    return (
        <div className={s.postsContainer}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={props.changeTextarea} />
                </div>
                <div>
                    <button onClick={props.addNewPost} >Добавить пост</button>
                </div>
                <div>
                    <button>Удалить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;