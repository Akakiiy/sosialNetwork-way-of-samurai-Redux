const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const UPLOAD_USERS = 'UPLOAD-USERS';

let initialState = {
    users: [],
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
                users: [...state.users, ...action.users]
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

export default reducerUsers;