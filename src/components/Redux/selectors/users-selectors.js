import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
};
export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true); //это просто заглушка для набивания руки или для дальнейших более сложных процессов (все таки это обучение)
});

const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector,
    (totalUsersCount) => {
    return totalUsersCount;
});

const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
};
export const getCurrentPage = createSelector(getCurrentPageSelector,
    (currentPage) => {
    return currentPage;
});

const getUploadingUsersCountSelector = (state) => {
    return state.usersPage.uploadingUsersCount;
};
export const getUploadingUsersCount = createSelector(getUploadingUsersCountSelector,
    (uploadingUsersCount) => {
    return uploadingUsersCount;
});

const getAreFollowingSelector = (state) => {
    return state.usersPage.areFollowing;
};
export const getAreFollowing = createSelector(getAreFollowingSelector,
    (areFollowing) => {
    return areFollowing;
});

const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}
export const getIsLoadingSelector = createSelector(getIsLoading,
    (isLoading) => {
    return isLoading;
});

const getBlockOfPages = (state) => {
    return state.usersPage.blockOfPages;
};
export const getBlockOfPagesSelector = createSelector(getBlockOfPages,
    (blockOfPages) => {
    return blockOfPages;
});
