import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

    const postsElements = posts.map((p, i) => <Post key={i} id={p.id} message={p.postMessage} likesCount={p.likesCount} />);

    return (
        <div className={s.postsContainer}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
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