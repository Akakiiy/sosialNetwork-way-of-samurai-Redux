import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import reducerApp from "./app-reducer"
import headerReducer from "./header-reducer";
import {chatReducer} from "./chat-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: reducerApp,
    header: headerReducer,
    chatPage: chatReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// типы достает функции из объектов actions
type PropertyTypes<T> = T extends {[key: string]: infer U} ? U : never
// функция комбинирующая результат вызова AC с ключами\названиями AC
export type ActionsTypes<T extends  {[key: string]: (...args: any[]) => any}> = ReturnType<PropertyTypes<T>>
// джинерик для типов санок
export type ThunkType<T extends Action> = ThunkAction<Promise<void> | void, AppStateType, undefined, T>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

//@ts-ignore
window._store_ = store; //это нужно чтоб проверять стор в браузерной консоли

export default store;