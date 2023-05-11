import {setAuthUserData} from './auth-reducer'
import {ActionsTypes, ThunkType} from "./store-redux";


let initialState = {
    initialization: false,
}
type InitialStateType = typeof initialState
const reducerApp = (state: InitialStateType = initialState, action: AppActionTypes): InitialStateType => {
    switch (action.type) {
        case 'START_INITIALIZATION':
            return {
                ...state,
                initialization: true,
            }
        default:
            return state;
    }
}
type AppActionTypes = ActionsTypes<typeof appActions>

export const appActions = {
    initialization : () => ({type: 'START_INITIALIZATION'} as const)
}

export const initializeApp = ():ThunkType<AppActionTypes> => (dispatch) => {
    let promiseMeRequest = dispatch(setAuthUserData());

    Promise.all([promiseMeRequest])
        .then(() => {
            dispatch(appActions.initialization());
        });
}

export default reducerApp;