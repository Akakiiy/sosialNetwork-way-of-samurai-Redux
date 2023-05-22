import s from './Post.module.css';
import React from "react";

type PropsType = {
    id: number
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.independent.co.uk/s3fs-public/thumbnails/image/2013/01/10/18/Ryan-Gosling-getty.jpg?quality=75&width=1200&auto=webp" alt="gosling"/>
            { props.message }
            <div>
                <span>&#128077;</span> { props.likesCount } Likes
            </div>
        </div>
    )
}

export default Post;