import s from "./Users.module.css";
import User from "./User/User";
import UsersPagesPaginator from "./UsersPagesPaginator";
import {
    follow,
    unfollow,
    uploadUsers,
    usersActions,
    UserType
} from "../Redux/users-reducer";
import React, {useEffect} from "react";
import UsersSearchForm from "./UsersSearchForm";
import Preloader from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {
    getAreFollowing, getBlockOfPagesSelector,
    getCurrentPage, getFriendSelector, getIsLoadingSelector, getTermSelector,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../Redux/store-redux";

export const Users = () => {
    const users: Array<UserType> = useSelector(getUsers),
        totalUsersCount: number | null = useSelector(getTotalUsersCount),
        currentPage: number | null = useSelector(getCurrentPage),
        uploadingUsersCount: number = useSelector(getUploadingUsersCount),
        areFollowing: Array<number> = useSelector(getAreFollowing),
        isLoading: boolean = useSelector(getIsLoadingSelector),
        blockOfPages: number = useSelector(getBlockOfPagesSelector),
        term: string = useSelector(getTermSelector),
        friend: null | boolean = useSelector(getFriendSelector);

    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();

    useEffect(() => {
        dispatch(uploadUsers(currentPage, uploadingUsersCount, term, friend));
    }, [currentPage, term, friend]);

    const changePage = (page: number) => {
        dispatch(usersActions.changePageTo(page));
    }
    const followUser = (userId: number) => {
        dispatch(follow(userId))
    }
    const unfollowUser = (userId: number) => {
        dispatch(unfollow(userId));
    }
    const setBlockOfPages = (blockOfPages: number) => {
        dispatch(usersActions.setBlockOfPages(blockOfPages))
    }
    const searchUsers = (term: string, friend: null | boolean) => {
        dispatch(usersActions.searchUsers(term, friend))
    }
    return (
        <div className={s.usersWrapper}>
            <UsersPagesPaginator uploadingUsersCount={uploadingUsersCount}
                                 totalUsersCount={totalUsersCount}
                                 currentPage={currentPage}
                                 changePage={changePage}
                                 pagesInABlock={10}
                                 blockOfPages={blockOfPages}
                                 setBlockOfPages={setBlockOfPages}
                                 isLoading={isLoading}/>
            <UsersSearchForm searchUsers={searchUsers}
                             term={term}
                             friend={friend}
                             isLoading={isLoading}
                             changePage={changePage}/>
            {
                isLoading
                    ? <Preloader/>
                    : users.map(user => {
                        return (
                            <div key={user.id} className={s.user}>
                                <User id={user.id}
                                      photos={user.photos}
                                      name={user.name}
                                      followed={user.followed}
                                      status={user.status}
                                      areFollowing={areFollowing}
                                      unfollow={unfollowUser}
                                      follow={followUser}/>
                            </div>
                        )
                    })
            }
        </div>
    );
};