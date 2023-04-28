import {connect} from "react-redux";
import {unfollow, follow, uploadUsers} from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {useEffect} from "react";
import {compose} from "redux";
import {
    getAreFollowing,
    getCurrentPage,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";

const UsersContainer = ({currentPage, uploadingUsersCount, totalUsersCount,
                            isLoading, uploadUsers, users,
                            areFollowing,unfollow, follow}) => {

    useEffect(() => {
        uploadUsers(currentPage, uploadingUsersCount);
    }, [currentPage]);
    const countAndReturnPages = () => {
        let totalPages = Math.ceil(totalUsersCount / uploadingUsersCount),
            pages = [],
            prevPages = (currentPage - 5 <= 0) ? 0 : currentPage - 5,
            nextPages = currentPage + 4;

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }

        return pages.slice(prevPages, nextPages);
    }

    const changePage = (page) => {
        uploadUsers(page, uploadingUsersCount);
    }

    return (
        <>
            {
                isLoading ?
                    <Preloader/> :
                    <Users changePage={changePage}
                           pages={countAndReturnPages()}
                           currentPage={currentPage}
                           totalUsersCount={totalUsersCount}
                           uploadingUsersCount={uploadingUsersCount}
                           unfollow={unfollow}
                           follow={follow}
                           users={users}
                           areFollowing={areFollowing}/>
            }
        </>
    );
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
)(UsersContainer);