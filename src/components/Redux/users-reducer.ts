import {ResultCodeEnum} from "../../api/api";
import {ActionsTypes, ThunkType} from "./store-redux";
import {usersRequests} from "../../api/userRequests";

type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    isLoading: boolean
    areFollowing: Array<number>
    term: string
    friend: null | boolean
}
export type UserType = {
    name: string
    id: number
    photos: PhotoType
    status: string | null
    followed: boolean
    uniqueUrlName?: string | null
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
    areFollowing: [], //array of users IDs
    term: '',
    friend: null
};

const usersReducer = (state: InitialStateType = initialState, action: UserActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users : state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users : state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            }
        case 'UPLOAD_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'CHANGE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.pageId,
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case 'TOGGLE_PRELOADER':
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case 'TOGGLE_BUTTONS_FOLLOWING':
            return {
                ...state,
                areFollowing: action.isFollowing
                    ? [...state.areFollowing, action.id]
                    : [...state.areFollowing.filter(idBtn => action.id !== idBtn)]
            }
        case 'SET_SETTINGS_FOR_SEARCH':
            return {
                ...state,
                term: action.term,
                friend: action.friend,
            }
        default :
            return state;
    }
};

type UserActionType = ActionsTypes<typeof usersActions>

export const usersActions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'UPLOAD_USERS', users} as const),
    changePageTo: (pageId: number) => ({type: 'CHANGE_CURRENT_PAGE', pageId} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    togglePreloader: (isLoading: boolean) => ({type: 'TOGGLE_PRELOADER', isLoading} as const),
    toggleButtonsFollowing: (id: number, isFollowing: boolean) => ({type: 'TOGGLE_BUTTONS_FOLLOWING', id, isFollowing} as const),
    searchUsers: (term: string, friend: null | boolean) => ({type: 'SET_SETTINGS_FOR_SEARCH', term, friend} as const)
}
export const uploadUsers = (currentPage: number, uploadingUsersCount: number, term: string, friend: null | boolean):ThunkType<UserActionType> =>  async (dispatch) => {
    dispatch(usersActions.changePageTo(currentPage));
    dispatch(usersActions.togglePreloader(true));
    let data = await usersRequests.axiosGetUsers(currentPage, uploadingUsersCount, term, friend);

    dispatch(usersActions.togglePreloader(false));
    dispatch(usersActions.setTotalUsersCount(data.totalCount));
    dispatch(usersActions.setUsers(data.items));
};
export const follow = (userId: number): ThunkType<UserActionType> => async (dispatch) => {
    dispatch(usersActions.toggleButtonsFollowing(userId, true));
    let resultCode = await usersRequests.axiosFollow(userId);

    dispatch(usersActions.toggleButtonsFollowing(userId, false));
    if (resultCode === ResultCodeEnum.Success) {
        dispatch(usersActions.followSuccess(userId));
    }
};
export const unfollow = (userId: number): ThunkType<UserActionType> => async (dispatch) => {
    dispatch(usersActions.toggleButtonsFollowing(userId, true));
    let resultCode = await usersRequests.axiosUnfollow(userId);

    dispatch(usersActions.toggleButtonsFollowing(userId, false));
    if (resultCode === ResultCodeEnum.Success) {
        dispatch(usersActions.unfollowSuccess(userId));
    }
};

export default usersReducer;