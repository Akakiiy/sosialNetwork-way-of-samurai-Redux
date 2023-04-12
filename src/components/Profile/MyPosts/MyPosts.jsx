import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Добавить пост</button>
                <button>Удалить пост</button>
            </div>
            <div>
                <Post message={'Hi, how are u doing?'} likesCount={10}/>
                <Post message={'It\'s my first post'} likesCount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;