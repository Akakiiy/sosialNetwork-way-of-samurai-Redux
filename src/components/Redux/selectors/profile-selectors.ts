import {createSelector} from "reselect";
import {AppStateType} from "../store-redux";

const getPosts = (state: AppStateType) => {
    return state.profilePage.posts
};
export const getPostsSelector = createSelector(getPosts,
    (posts) => {
    return posts;
});

const getNewPostText = (state: AppStateType) => {
    return state.profilePage.posts[state.profilePage.posts.length - 1].postMessage;
};
export const getNewPostTextSelector = createSelector(getNewPostText,
    (newPostText) => {
    return newPostText;
});

const getProfile = (state: AppStateType) => {
    return state.profilePage.profile;
};
export const getProfileSelector = createSelector(getProfile,
    (profile) => {
    return profile;
});
export const getProfilePhotoSelector = createSelector(getProfile,
    (profile) => {
    if (profile && profile.photos) {
        return profile.photos.large
    }
})

export const getFullName = createSelector(getProfile,
    (profile) => {
    if (profile === null) {
        return null
    } else {
        return profile.fullName
    }
})

const getStatusPage = (state: AppStateType) => {
    return state.profilePage.statusText;
};
export const getStatusSelector = createSelector(getStatusPage,
    (selector) => {
    return selector;
});

const getIsOwner = (state: AppStateType) => {
    return state.profilePage.isOwner;
};

export const getIsOwnerSelector = createSelector(getIsOwner,
    (isOwner) => {
    return isOwner;
});

