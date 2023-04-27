import {setAuthUserData} from "./auth-reducer";

const START_INITIALIZATION = 'START_INITIALIZATION';

let initialState = {
    initialize: false,
}

const reducerApp = (state = initialState, action) => {
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

export const initialization = () => {
    return {type: START_INITIALIZATION}
}
export const initializeApp = () => (dispatch) => {
    let promiseMeRequest = dispatch(setAuthUserData());

    Promise.all([promiseMeRequest])
        .then(() => {
            dispatch(initialization());
        });
}

export default reducerApp;