import {AppStateType} from "../store-redux";
import {createSelector} from "reselect";

const getOwnPhoto = (state: AppStateType) => {
    return state.header.ownPhoto
}
export const getOwnPhotoSelector = createSelector(getOwnPhoto,
    (ownPhoto) => {
    return ownPhoto;
})