import FriendsMini from "./FriendsMini";

const FriendsMiniContainer = (props) => {
    let state = props.store.getState();

    return <FriendsMini friends={state.sidebar.friends} />
}

export default FriendsMiniContainer;