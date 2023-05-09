import s from './FriendMin.module.css';
import React from "react";

type PropsType = {
    name: string
}

const FriendMin: React.FC<PropsType> = ({name}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}></div>
            <div className={s.name}>{name}</div>
        </div>
    );
};

export default FriendMin;