import s from './FriendsMini.module.css';
import FriendMin from "./FriendMin/FriendMin";

const FriendsMini = (props) => {
    let friendsElements = props.friends.map((friendObj, i) => <FriendMin key={i} state={friendObj}/>)

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