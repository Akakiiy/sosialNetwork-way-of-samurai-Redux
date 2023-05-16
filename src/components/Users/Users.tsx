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
    getAreFollowing, getCurrentPage, getFriendSelector, getIsLoadingSelector, getTermSelector,
    getTotalUsersCount,
    getUploadingUsersCount,
    getUsers
} from "../Redux/selectors/users-selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../Redux/store-redux";
import {useSearchParams} from "react-router-dom";
import * as queryString from "querystring";

export const Users = () => {
    const users: Array<UserType> = useSelector(getUsers),
        totalUsersCount: number | null = useSelector(getTotalUsersCount),
        currentPage: number | null = useSelector(getCurrentPage),
        uploadingUsersCount: number = useSelector(getUploadingUsersCount),
        areFollowing: Array<number> = useSelector(getAreFollowing),
        isLoading: boolean = useSelector(getIsLoadingSelector),
        term: string = useSelector(getTermSelector),
        friend: null | boolean = useSelector(getFriendSelector);
    // диспатч для санок и AC
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();
    // объект хистори, для работы с адрессной строкой
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const parsed = queryString.parse(searchParams.toString().substring(1)) as {term: string, friend: string, page: string};

        const page: number = parsed.page ? +parsed.page : 1
        const term: string = parsed.term ? parsed.term : ''
        const friend: boolean | null = parsed.friend ? JSON.parse(parsed.friend) : null

        changePage(page);
        setSettingsForSearch(term, friend);
    }, [])

    useEffect(() => {
        //динамическое формирование адрессной строки без дефолтных параметров
        let paramsSearchUrl: {page?: number, term?: string, friend?: boolean} = {};
        if (currentPage !== 1) paramsSearchUrl.page = currentPage;
        if (term) paramsSearchUrl.term = term;
        if (friend !== null) paramsSearchUrl.friend = friend;
        //формирование адрессной строки при поиске юзеров
        setSearchParams(queryString.stringify(paramsSearchUrl));
        // navigate.push({
        //     pathname: '/users',
        //     search: queryString.stringify(paramsSearchUrl)
        // });
        // запрос на отфильтрованных юзеров
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
    const setSettingsForSearch = (term: string, friend: null | boolean) => {
        dispatch(usersActions.searchUsers(term, friend))
    }
    return (
        <div className={s.usersWrapper}>
            <UsersPagesPaginator uploadingUsersCount={uploadingUsersCount}
                                 totalUsersCount={totalUsersCount}
                                 changePage={changePage}
                                 isLoading={isLoading}/>
            <UsersSearchForm searchUsers={setSettingsForSearch}
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