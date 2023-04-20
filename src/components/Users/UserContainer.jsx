import {connect} from "react-redux";
import {changePageTo, follow, setTotalUsersCount, setUsers, togglePreloader, unfollow} from "../Redux/reducer-users";

import axios from 'axios';
import Users from "./Users";
import {Component} from "react";
import Preloader from "../common/Preloader/Preloader";


class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.uploadingUsers}`)
            .then(response => {
                this.props.togglePreloader(false);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            });
    }

    changePage = (page) => {
        this.props.changePageTo(page);
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.uploadingUsers}`)
            .then(response => {
                this.props.togglePreloader(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isLoading ?
                        <Preloader/> :
                        <Users changePage={this.changePage}
                               currentPage={this.props.currentPage}
                               totalUsersCount={this.props.totalUsersCount}
                               uploadingUsers={this.props.uploadingUsers}
                               setTotalUsersCount={this.props.setTotalUsersCount}
                               setUsers={this.props.setUsers}
                               unfollow={this.props.unfollow}
                               follow={this.props.follow} users={this.props.users}/>
                }
            </>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        uploadingUsers: state.usersPage.uploadingUsers,
        isLoading: state.usersPage.isLoading,
    };
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, changePageTo, setTotalUsersCount, togglePreloader})(UsersApiContainer);