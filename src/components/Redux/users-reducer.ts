import {apiServices} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const UPLOAD_USERS = 'UPLOAD_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_BUTTONS_FOLLOWING = 'TOGGLE_BUTTONS_FOLLOWING';
const SET_CURRENT_BLOCK_OF_PAGES = 'SET_CURRENT_BLOCK_OF_PAGES';

type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    isLoading: boolean
    areFollowing: Array<number>
    blockOfPages: number
}
export type UserType = {
    name: string
    id: number
    photos: PhotoType
    status: string | null
    followed: boolean
}
type PhotoType = {
    small: string | null
    large: string | null
}

let initialState: InitialStateType = {
    users: [],
    totalUsersCount: null,
    currentPage: 1,
    uploadingUsersCount: 8,
    isLoading: false,
    areFollowing: [], //array of users ids
    blockOfPages: 1,
};

const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users : state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users : state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            }
        case UPLOAD_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageId,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case TOGGLE_BUTTONS_FOLLOWING:
            return {
                ...state,
                areFollowing: action.isFollowing
                    ? [...state.areFollowing, action.id]
                    : [state.areFollowing.filter(idBtn => action.id !== idBtn)]
            }
        case SET_CURRENT_BLOCK_OF_PAGES:
            return {
                ...state,
                blockOfPages: action.blockOfPages,
            }
        default :
            return state;
    }
};

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessType => {
    return {
        type: FOLLOW,
        userId,
    };
};

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessType => {
    return {
        type: UNFOLLOW,
        userId,
    }
};

type SetUsersType = {
    type: typeof UPLOAD_USERS,
    users: UserType
}

export const setUsers = (users: UserType): SetUsersType => {
    return {
        type: UPLOAD_USERS,
        users,
    }
};

type ChangePageToType = {
    type: typeof CHANGE_CURRENT_PAGE
    pageId: number
}

export const changePageTo = (pageId: number): ChangePageToType => {
    return {
        type: CHANGE_CURRENT_PAGE,
        pageId,
    }
};

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    }
};

type TogglePreloaderType = {
    type: typeof TOGGLE_PRELOADER
    isLoading: boolean
}

export const togglePreloader = (isLoading: boolean): TogglePreloaderType => {
    return {
        type: TOGGLE_PRELOADER,
        isLoading,
    }
};

type ToggleButtonsFollowingType = {
    type: typeof TOGGLE_BUTTONS_FOLLOWING
    id: number
    isFollowing: boolean
}

export const toggleButtonsFollowing = (id: number, isFollowing: boolean): ToggleButtonsFollowingType => {
    return {
        type: TOGGLE_BUTTONS_FOLLOWING,
        id,
        isFollowing,
    };
};
export const uploadUsers = (currentPage: number, uploadingUsersCount: number) =>  async (dispatch: any) => {
    dispatch(changePageTo(currentPage));
    dispatch(togglePreloader(true));
    let data = await apiServices.axiosGetUsers(currentPage, uploadingUsersCount);

    dispatch(togglePreloader(false));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setUsers(data.items));
};
export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleButtonsFollowing(userId, true));
    let resultCode = await apiServices.axiosFollow(userId);

    dispatch(toggleButtonsFollowing(userId, false));
    if (resultCode === 0) {
        dispatch(followSuccess(userId));
    }
};
export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleButtonsFollowing(userId, true));
    let resultCode = await apiServices.axiosUnfollow(userId);

    dispatch(toggleButtonsFollowing(userId, false));
    if (resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
};

type SetBlockOfPagesType = {
    type: typeof SET_CURRENT_BLOCK_OF_PAGES
    blockOfPages: number
}

export const setBlockOfPages = (blockOfPages: number): SetBlockOfPagesType => {
    return {
        type: SET_CURRENT_BLOCK_OF_PAGES,
        blockOfPages,
    }
}

export default usersReducer;