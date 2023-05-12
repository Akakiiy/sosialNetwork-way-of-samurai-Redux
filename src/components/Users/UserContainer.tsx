import {connect} from "react-redux";
import {unfollow, follow, uploadUsers, UserType, usersActions} from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import React, {useEffect} from "react";
import {
    getAreFollowing, getBlockOfPagesSelector,
    getCurrentPage, getIsLoadingSelector,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";
import {AppStateType} from "../Redux/store-redux";

type PropsType = MSTPType & MDTPType & OwnPropsType

const UsersContainer: React.FC<PropsType> = ({currentPage, uploadingUsersCount, totalUsersCount,
                            isLoading, uploadUsers, users,
                            areFollowing,unfollow, follow,
                            setBlockOfPages, blockOfPages}) => {

    useEffect(() => {
        uploadUsers(currentPage, uploadingUsersCount);
    }, [currentPage]);

    const changePage = (page: number) => {
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
type MSTPType = {
    users: Array<UserType>
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    areFollowing: Array<number>
    isLoading: boolean
    blockOfPages: number
}
type MDTPType = {
    uploadUsers: (currentPage: number, uploadingUsersCount: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    setBlockOfPages: (blockOfPages: number) => void
}
type OwnPropsType = {}
const mapStateToProps = (state: AppStateType): MSTPType => {
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
export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {
    uploadUsers,
    follow,
    unfollow,
    setBlockOfPages: usersActions.setBlockOfPages
})(UsersContainer);