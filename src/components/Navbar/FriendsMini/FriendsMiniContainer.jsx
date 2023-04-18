import FriendsMini from "./FriendsMini";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const FriendsMiniContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsMini);

export default FriendsMiniContainer;