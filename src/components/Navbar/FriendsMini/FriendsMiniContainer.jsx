import FriendsMini from "./FriendsMini";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        isLogged: state.auth.isLogged,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsMini);