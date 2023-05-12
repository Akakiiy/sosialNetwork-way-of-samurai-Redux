import './App.css';
import React, {Suspense, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {AppStateType} from "./components/Redux/store-redux";

const UsersContainer = React.lazy(() => import("./components/Users/UserContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

type PropsType = MSTPType & MDTPType

const App: React.FC<PropsType> = (props) => {

    useEffect(() => {
        props.initializeApp()
    });

    if (!props.initialization) {
        return <Preloader />
    }

    return (
        <div className={'app-wrapper'}>
            <HeaderContainer />
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>} />
                <Route path={'/dialogs'} render={() => <DialogsContainer />} />
                <Route path={'/users'} render={() => {
                    return (
                        <Suspense fallback={<Preloader/>}>
                            <UsersContainer />
                        </Suspense>)
                }} />
                <Route path={'/news'} render={News} />
                <Route path={'/music'} render={Music} />
                <Route path={'/settings'} render={Settings} />
                <Route path={'/login'} render={() => {
                    return (
                        <Suspense fallback={<Preloader/>}>
                            <LoginContainer />
                        </Suspense>
                    )
                }}/>
                <Route path={'/'}><Redirect to={'/profile'}/></Route> {/*временная заглушка на стартовую стриницу, пока не не придумаю приветствие*/}
            </div>
        </div>
    );
}

type MSTPType = {
    initialization: boolean
}
type MDTPType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        initialization: state.app.initialization,
    }
}

export default compose(
    withRouter,
    connect<MSTPType, MDTPType, {}, AppStateType>(mapStateToProps, {initializeApp}),
)(App) as React.ComponentType;