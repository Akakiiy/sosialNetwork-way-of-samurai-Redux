import {AppStateType} from "../store-redux";
import {createSelector} from "reselect";

const getInitialization = (state: AppStateType) => {
    return state.app.initialization;
};
export const getInitializationSelector = createSelector(getInitialization,
    (initialization) => {
        return initialization;
    });