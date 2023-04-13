import s from './FriendsMini.module.css';
import FriendMin from "./FriendMin/FriendMin";

const FriendsMini = ({friends}) => {
    let friendsElements = friends.map((friendObj, i) => <FriendMin key={i} state={friendObj}/>)

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