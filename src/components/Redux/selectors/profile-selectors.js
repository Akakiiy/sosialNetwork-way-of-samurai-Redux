import {createSelector} from "reselect";

const getPosts = (state) => {
    return state.profilePage.posts
};
export const getPostsSelector = createSelector(getPosts,
    (posts) => {
    return posts;
});

const getNewPostText = (state) => {
    return state.profilePage.newPostText;
};
export const getNewPostTextSelector = createSelector(getNewPostText,
    (newPostText) => {
    return newPostText;
});

const getProfile = (state) => {
    return state.profilePage.profile;
};
export const getProfileSelector = createSelector(getProfile,
    (profile) => {
    return profile;
});

const getStatusPage = (state) => {
    return state.profilePage.statusText;
};
export const getStatusSelector = createSelector(getStatusPage,
    (selector) => {
    return selector;
});



