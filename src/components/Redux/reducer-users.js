const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const UPLOAD_USERS = 'UPLOAD_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';

let initialState = {
    users: [],
    totalUsersCount : null,
    currentPage: 1,
    uploadingUsers: 8,
    isLoading: false,
};

const reducerUsers = (state = initialState, action) => {
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
        default :
            return state;
    }
};

export const userFollowAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
};
export const userUnfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    }
};

export const setUsersAC = (users) => {
    return {
        type: UPLOAD_USERS,
        users: users,
    }
}

export const changePageToAC = (pageId) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        pageId: pageId,
    }
}

export const setTotalUsersCountAC = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    }
}

export const togglePreloaderAC = (isLoading) => {
    return {
        type: TOGGLE_PRELOADER,
        isLoading: isLoading,
    }
}

export default reducerUsers;