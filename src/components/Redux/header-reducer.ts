import {ActionsTypes, ThunkType} from "./store-redux";
import {usersRequests} from "../../api/userRequests";

type InitialValues = {
    ownPhoto: null | string
}

const initialState: InitialValues = {
    ownPhoto: null
}

const headerReducer = (state: InitialValues = initialState, action: HeaderActionTypes): InitialValues => {
    switch (action.type) {
        case 'SET_OWN_PHOTO':
            return {
                ...state,
                ownPhoto: action.ownPhoto,
            }
        default:
            return state;
    }
}

type HeaderActionTypes = ActionsTypes<typeof headerActions>

export const headerActions = {
    setOwnPhoto: (ownPhoto: string | null) => ({type: 'SET_OWN_PHOTO', ownPhoto: ownPhoto} as const)
}

export const getOwnPhoto = (userId: number): ThunkType<HeaderActionTypes> => async (dispatch) => {
    const request = await usersRequests.axiosGetUserProfile(userId);

    let photos: string | null;
    if (request.data.photos && request.data.photos.large) {
        photos = request.data.photos.large
    } else {
        photos = null
    }
    dispatch(headerActions.setOwnPhoto(photos))
}

export default headerReducer;