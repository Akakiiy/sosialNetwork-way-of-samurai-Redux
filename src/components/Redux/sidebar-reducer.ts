type InitialStateType = {
    friends: Array<FriendType>
}
type FriendType = {
    id: number
    name: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Ryan Gosling'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Alex'},
    ],
};

const sidebarReducer = (state: InitialStateType = initialState, action): InitialStateType => {
    return state;
};

export default sidebarReducer;