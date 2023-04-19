import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";
import reducerUsers from "./reducer-users";

const reducers = combineReducers({
    profilePage: reducerProfile,
    dialogPage: reducerDialogs,
    sidebar: reducerSidebar,
    usersPage: reducerUsers,
});

const store = createStore(reducers);

export default store;