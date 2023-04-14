import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

const MyPosts = ({state, addPost, changeNewPostTextarea}) => {

    const postsElements = state.posts.map((p, i) => <Post key={i} id={p.id} message={p.postMessage} likesCount={p.likesCount} />);

    const newPostText = React.createRef();

    const addNewPost = () => {
        let text = newPostText.current.value;
        addPost(text);
    };

    const changeTextarea = () => {
        let text = newPostText.current.value;
        changeNewPostTextarea(text);
    };

    return (
        <div className={s.postsContainer}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={state.newPostText} ref={newPostText} onChange={changeTextarea}/>
                </div>
                <div>
                    <button onClick={addNewPost}>Добавить пост</button>
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