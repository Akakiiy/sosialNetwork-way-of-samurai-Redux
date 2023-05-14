import {createSelector} from "reselect";
import {AppStateType} from "../store-redux";
import {UserType} from "../users-reducer";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector,
    (users: Array<UserType>) => {
    return users.filter(u => true); //это просто заглушка для набивания руки или для дальнейших более сложных процессов (все таки это обучение)
});

const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
};
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector,
    (totalUsersCount: number | null) => {
    return totalUsersCount;
});

const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage;
};
export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage: number) => {
    return currentPage;
});

const getUploadingUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.uploadingUsersCount;
};
export const getUploadingUsersCount = createSelector(getUploadingUsersCountSelector,
    (uploadingUsersCount: number) => {
    return uploadingUsersCount;
});

const getAreFollowingSelector = (state: AppStateType) => {
    return state.usersPage.areFollowing;
};
export const getAreFollowing = createSelector(getAreFollowingSelector,
    (areFollowing: Array<number>) => {
    return areFollowing;
});

const getIsLoading = (state: AppStateType) => {
    return state.usersPage.isLoading;
}
export const getIsLoadingSelector = createSelector(getIsLoading,
    (isLoading: boolean) => {
    return isLoading;
});

const getBlockOfPages = (state: AppStateType) => {
    return state.usersPage.blockOfPages;
};
export const getBlockOfPagesSelector = createSelector(getBlockOfPages,
    (blockOfPages: number) => {
    return blockOfPages;
});

const getTerm = (state: AppStateType) => {
    return state.usersPage.term;
};
export const getTermSelector = createSelector(getTerm,
    (term: string) => {
    return term;
});

const getFriend = (state: AppStateType) => {
    return state.usersPage.friend;
};
export const getFriendSelector = createSelector(getFriend,
    (friend: null | boolean) => {
    return friend;
});
