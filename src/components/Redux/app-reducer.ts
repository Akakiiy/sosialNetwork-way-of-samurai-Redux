import {setAuthUserData} from './auth-reducer'

const START_INITIALIZATION = 'START_INITIALIZATION';

type InitialStateType = {
    initialization: boolean
}
let initialState: InitialStateType = {
    initialization: false,
}

const reducerApp = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
type InitializationActionType = {
    type: typeof START_INITIALIZATION
}

export const initialization = (): InitializationActionType => {
    return {type: START_INITIALIZATION}
}
export const initializeApp = () => (dispatch: any): void => {
    let promiseMeRequest = dispatch(setAuthUserData());

    Promise.all([promiseMeRequest])
        .then(() => {
            dispatch(initialization());
        });
}

export default reducerApp;