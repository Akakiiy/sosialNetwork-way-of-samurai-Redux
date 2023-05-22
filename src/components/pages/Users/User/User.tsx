import s from './User.module.css';
import profileImgPlug from "../../../../assets/img/ryan-gosling.jpeg";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
    areFollowing: Array<number> //array with ids
    followed: boolean
    unfollow: (id: number) => void
    follow: (id: number) => void
}
type PhotosType = {
    small: string | null
}

const User: React.FC<PropsType> = (props) => {
    return (
        <>
            <div>
                <div>
                    <img className={s.userImg}
                         src={props.photos.small !== null ? props.photos.small : profileImgPlug}
                         alt={props.name}/>
                </div>
                {props.followed ?
                    <button className={s.buttonUnfollow}
                            disabled={props.areFollowing.some(idBtn => idBtn === props.id)}
                            onClick={() => props.unfollow(props.id)}>unfollow</button>
                    : <button className={s.buttonFollow}
                              disabled={props.areFollowing.some(idBtn => idBtn === props.id)}
                              onClick={() => props.follow(props.id)}>follow</button>}
            </div>
            <div className={s.userInfo}>
                <NavLink className={s.userName} to={`/profile/${props.id}`}>
                    {props.name}
                </NavLink>
                <div className={s.userStatus}>
                    {props.status}
                </div>
                <div className={s.userLocation}>
                    <div>{'props.location.country'}</div>
                    <div>{'props.location.city'}</div>
                </div>
            </div>
        </>
    );
};

export default User;