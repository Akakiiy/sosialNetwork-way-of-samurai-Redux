import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";
import MyPostReduxForm from "./MyPostForm/MyPostForm";

type PropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string) => void
}
export type PostType = {
    id: number
    postMessage: string
    likesCount: number
}

const MyPosts: React.FC<PropsType> = (props) => {

    return (
        <div className={s.postsContainer}>
            <h2>DEMO VERSION COMING SOON!</h2>
            <h3>My posts </h3>
            <MyPostReduxForm addPost={props.addPost} />
            <div className={s.posts}>
                {
                    [...props.posts]
                        .reverse()
                        .map((p, i) => <Post key={i} id={p.id} message={p.postMessage} likesCount={p.likesCount}/>)
                }
            </div>
        </div>
    )
}

export default MyPosts;