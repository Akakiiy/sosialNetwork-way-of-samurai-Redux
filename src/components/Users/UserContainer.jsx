import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, userFollowAC, userUnfollowAC} from "../Redux/reducer-users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(userFollowAC(userId))
        },
        unfollow: (userId) => {
            dispatch(userUnfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;