import {connect} from "react-redux";
import {unfollow, follow, uploadUsers} from "../Redux/reducer-users";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Component} from "react";
import {compose} from "redux";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.uploadUsers(this.props.currentPage, this.props.uploadingUsersCount);
    }

    countAndReturnPages = () => {
        let totalPages = Math.ceil(this.props.totalUsersCount / this.props.uploadingUsersCount),
            pages = [],
            prevPages = (this.props.currentPage - 5 <= 0) ? 0 : this.props.currentPage - 5,
            nextPages = this.props.currentPage + 4;

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }

        return pages.slice(prevPages, nextPages);
    }

    changePage = (page) => {
        this.props.uploadUsers(page, this.props.uploadingUsersCount);
    }

    render() {
        return (
            <>
                {
                    this.props.isLoading ?
                        <Preloader/> :
                        <Users changePage={this.changePage}
                               pages={this.countAndReturnPages()}
                               currentPage={this.props.currentPage}
                               totalUsersCount={this.props.totalUsersCount}
                               uploadingUsersCount={this.props.uploadingUsersCount}
                               unfollow={this.props.unfollow}
                               follow={this.props.follow}
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
        uploadingUsersCount: state.usersPage.uploadingUsersCount,
        areFollowing: state.usersPage.areFollowing,
    };
};

export default compose(
    connect(mapStateToProps, {uploadUsers, follow, unfollow}),
)(UsersContainer)