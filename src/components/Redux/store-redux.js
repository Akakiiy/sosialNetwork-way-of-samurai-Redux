import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducer-profile";
import reducerDialogs from "./reducer-dialogs";
import reducerSidebar from "./reducer-sidebar";
import reducerUsers from "./reducer-users";
import reducerAuth from "./reducer-auth";
import thunk from "redux-thunk";
import reducerApp from "./app-reducer";

const reducers = combineReducers({
    profilePage: reducerProfile,
    dialogPage: reducerDialogs,
    sidebar: reducerSidebar,
    usersPage: reducerUsers,
    auth: reducerAuth,
    app: reducerApp,
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store; //это нужно чтоб проверять стор в браузерной консоли

export default store;