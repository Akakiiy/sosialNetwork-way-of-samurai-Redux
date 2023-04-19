import {connect} from "react-redux";
import Users from "./Users";
import {changePageToAC, setTotalUsersCountAC, setUsersAC, userFollowAC, userUnfollowAC} from "../Redux/reducer-users";

import axios from 'axios';
import {Component} from "react";

class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.uploadingUsers}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    }

    changePage = (page) => {
        this.props.changePageTo(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.uploadingUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <Users changePage={this.changePage}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      uploadingUsers={this.props.uploadingUsers}
                      setTotalUsersCount={this.props.setTotalUsersCount}
                      setUsers={this.props.setUsers}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow} users={this.props.users}/> ;
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        uploadingUsers: state.usersPage.uploadingUsers,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(userFollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch(userUnfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        changePageTo: (pageId) => {
            dispatch(changePageToAC(pageId));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);