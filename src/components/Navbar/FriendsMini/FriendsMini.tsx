import s from './FriendsMini.module.css';
import FriendMin from "./FriendMin/FriendMin";
import React from 'react'

type PropsType = {
    friends: Array<FriendsObjType>
    isLogged: boolean
}
export type FriendsObjType = {
    id: number
    name: string
}

const FriendsMini: React.FC<PropsType> = (props) => {
    let friendsElements = props.friends.map((friendObj: FriendsObjType) => <FriendMin key={friendObj.id} name={friendObj.name}/>)

    if (!props.isLogged) {
        return null
    }

    return (
        <div>
            <h2>Friends</h2>
            <div className={s.wrapper}>
                {friendsElements}
            </div>
        </div>
    )
}

export default FriendsMini;