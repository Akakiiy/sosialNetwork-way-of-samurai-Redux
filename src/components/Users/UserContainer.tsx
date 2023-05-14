import {connect} from "react-redux";
import {unfollow, follow, uploadUsers, UserType, usersActions} from "../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import React, {useEffect} from "react";
import {
    getAreFollowing, getBlockOfPagesSelector,
    getCurrentPage, getFriendSelector, getIsLoadingSelector, getTermSelector,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";
import {AppStateType} from "../Redux/store-redux";

type PropsType = MSTPType & MDTPType & OwnPropsType

const UsersContainer: React.FC<PropsType> = (props) => {

    const {
        currentPage, uploadingUsersCount, totalUsersCount,
        isLoading, uploadUsers, users,
        areFollowing, unfollow, follow,
        setBlockOfPages, blockOfPages, term,
        friend, searchUsers
    } = props;

    useEffect(() => {
        uploadUsers(currentPage, uploadingUsersCount, term, friend);
    }, [currentPage, term, friend]);

    const changePage = (page: number) => {
        uploadUsers(page, uploadingUsersCount, term, friend);
    }

    return (
        <Users changePage={changePage}
               currentPage={currentPage}
               totalUsersCount={totalUsersCount}
               uploadingUsersCount={uploadingUsersCount}
               unfollow={unfollow}
               follow={follow}
               users={users}
               areFollowing={areFollowing}
               blockOfPages={blockOfPages}
               setBlockOfPages={setBlockOfPages}
               searchUsers={searchUsers}
               term={term}
               friend={friend}
               isLoading={isLoading}/>

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
    term: string
    friend: null | boolean
}
type MDTPType = {
    uploadUsers: (currentPage: number, uploadingUsersCount: number, term: string, friend: null | boolean) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    setBlockOfPages: (blockOfPages: number) => void
    searchUsers: (term: string, friend: null | boolean) => void
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
        term: getTermSelector(state),
        friend: getFriendSelector(state),
    };
};
export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {
    uploadUsers,
    follow,
    unfollow,
    setBlockOfPages: usersActions.setBlockOfPages,
    searchUsers: usersActions.searchUsers
})(UsersContainer);