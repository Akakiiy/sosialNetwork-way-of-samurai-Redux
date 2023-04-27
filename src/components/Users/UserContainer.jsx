import {connect} from "react-redux";
import {unfollow, follow, uploadUsers} from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Component} from "react";
import {compose} from "redux";
import {
    getAreFollowing,
    getCurrentPage,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";

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
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        uploadingUsersCount: getUploadingUsersCount(state),
        areFollowing: getAreFollowing(state),
    };
};

export default compose(
    connect(mapStateToProps, {uploadUsers, follow, unfollow}),
)(UsersContainer)