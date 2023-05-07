import {connect} from "react-redux";
import {unfollow, follow, uploadUsers, setBlockOfPages} from "../Redux/users-reducer.ts";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {useEffect} from "react";
import {compose} from "redux";
import {
    getAreFollowing, getBlockOfPagesSelector,
    getCurrentPage, getIsLoadingSelector,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";

const UsersContainer = ({currentPage, uploadingUsersCount, totalUsersCount,
                            isLoading, uploadUsers, users,
                            areFollowing,unfollow, follow,
                            setBlockOfPages, blockOfPages}) => {

    useEffect(() => {
        uploadUsers(currentPage, uploadingUsersCount);
    }, [currentPage]);

    const changePage = (page) => {
        uploadUsers(page, uploadingUsersCount);
    }

    return (
        <>
            {
                isLoading ?
                    <Preloader/> :
                    <Users changePage={changePage}
                           currentPage={currentPage}
                           totalUsersCount={totalUsersCount}
                           uploadingUsersCount={uploadingUsersCount}
                           unfollow={unfollow}
                           follow={follow}
                           users={users}
                           areFollowing={areFollowing}
                           blockOfPages={blockOfPages}
                           setBlockOfPages={setBlockOfPages}/>
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
        isLoading: getIsLoadingSelector(state),
        blockOfPages: getBlockOfPagesSelector(state),
    };
};

export default compose(
    connect(mapStateToProps, {uploadUsers, follow, unfollow, setBlockOfPages}),
)(UsersContainer);