import {setAuthUserData} from './auth-reducer'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store-redux";

const START_INITIALIZATION = 'START_INITIALIZATION';

type InitialStateType = {
    initialization: boolean
}
let initialState: InitialStateType = {
    initialization: false,
}

const reducerApp = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case START_INITIALIZATION:
            return {
                ...state,
                initialization: true,
            }
        default:
            return state;
    }
}
type ActionTypes = InitializationActionType

type InitializationActionType = {
    type: typeof START_INITIALIZATION
}
export const initialization = (): InitializationActionType => {
    return {type: START_INITIALIZATION}
}
export const initializeApp = ():ThunkAction<void, AppStateType, unknown, ActionTypes> => (dispatch) => {
    let promiseMeRequest = dispatch(setAuthUserData());

    Promise.all([promiseMeRequest])
        .then(() => {
            dispatch(initialization());
        });
}

export default reducerApp;