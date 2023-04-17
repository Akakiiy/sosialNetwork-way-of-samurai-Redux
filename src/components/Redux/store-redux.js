import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";

const reducers = combineReducers({
    profilePage: reducerProfile,
    dialogPage: reducerDialogs,
    sidebar: reducerSidebar,
});

const store = createStore(reducers);

export default store;