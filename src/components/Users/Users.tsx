import s from "./Users.module.css";
import User from "./User/User";
import UsersPagesPaginator from "./UsersPagesPaginator";
import {UserType} from "../Redux/users-reducer";
import React from "react";
import UsersSearchForm from "./UsersSearchForm";
import Preloader from "../common/Preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    areFollowing: Array<number>
    blockOfPages: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setBlockOfPages: (blockOfPages: number) => void
    changePage: (page: number) => void
    searchUsers: (term: string, friend: null | boolean) => void
    term: string
    friend: null | boolean
    isLoading: boolean
}

const Users: React.FC<PropsType> = (props) => {

    return (
        <div className={s.usersWrapper}>
            <UsersPagesPaginator uploadingUsersCount={props.uploadingUsersCount}
                                 totalUsersCount={props.totalUsersCount}
                                 currentPage={props.currentPage}
                                 changePage={props.changePage}
                                 countPagesInABlock={10}
                                 blockOfPages={props.blockOfPages}
                                 setBlockOfPages={props.setBlockOfPages}
                                 isLoading={props.isLoading}/>
            <UsersSearchForm searchUsers={props.searchUsers}
                             term={props.term}
                             friend={props.friend}
                             isLoading={props.isLoading}/>
            {
                props.isLoading
                    ? <Preloader/>
                    : props.users.map(user => {
                        return (
                            <div key={user.id} className={s.user}>
                                <User id={user.id}
                                      photos={user.photos}
                                      name={user.name}
                                      followed={user.followed}
                                      status={user.status}
                                      areFollowing={props.areFollowing}
                                      unfollow={props.unfollow}
                                      follow={props.follow}/>
                            </div>
                        )
                    })
            }
        </div>
    );
}

export default Users;