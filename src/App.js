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

const UsersContainer = React.lazy(() => import("./components/Users/UserContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

const App = (props) => {

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
                {/*<Route path={'/'} render={() => <Redirect to={'/profile'}/>} /> /!*заглушка пока не придумаю страницу приветствия*!/*/}
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
                            <LoginContainer/>
                        </Suspense>
                    )
                }}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        initialization: state.app.initialization,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);