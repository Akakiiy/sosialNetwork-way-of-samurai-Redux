import {connect} from "react-redux";
import {
    changePageTo,
    follow,
    setTotalUsersCount,
    setUsers,
    toggleButtonsFollowing,
    togglePreloader,
    unfollow
} from "../Redux/reducer-users";
import Users from "./Users";
import {Component} from "react";
import Preloader from "../common/Preloader/Preloader";
import {apiServices} from "../../api/api";


class UsersApiContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.togglePreloader(true);
        apiServices.axiosGetUsers(this.props.currentPage, this.props.uploadingUsers)
        .then(data => {
                this.props.togglePreloader(false);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setUsers(data.items);
            });
    }

    follow = (userId) => {
        this.props.toggleButtonsFollowing(userId, true);
        apiServices.axiosFollow(userId)
            .then(resultCode => {
                this.props.toggleButtonsFollowing(userId, false);
                if (resultCode === 0) {
                    this.props.follow(userId);
                    console.log('подписка есть', resultCode);
                }
            });
    }

    unfollow = (userId) => {
        this.props.toggleButtonsFollowing(userId, true);
        apiServices.axiosUnfollow(userId)
            .then(resultCode => {
                this.props.toggleButtonsFollowing(userId, false);
                if (resultCode === 0) {
                    this.props.unfollow(userId);
                    console.log('подписки нет', resultCode);
                }
            });
    }

    changePage = (page) => {
        this.props.changePageTo(page);
        this.props.togglePreloader(true);
        apiServices.axiosGetUsers(page, this.props.uploadingUsers)
            .then(data => {
                this.props.togglePreloader(false);
                this.props.setUsers(data.items);
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
                               unfollow={this.unfollow}
                               follow={this.follow}
                               users={this.props.users}
                               areFollowing={this.props.areFollowing}/>
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
        areFollowing: state.usersPage.areFollowing,
    };
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, changePageTo, setTotalUsersCount, togglePreloader, toggleButtonsFollowing})(UsersApiContainer);