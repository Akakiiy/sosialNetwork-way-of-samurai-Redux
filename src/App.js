import './App.css';
import React, {useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

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
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />} />
                <Route path={'/dialogs'} render={() => <DialogsContainer />} />
                <Route path={'/users'} render={() => <UsersContainer />} />
                <Route path={'/news'} render={News} />
                <Route path={'/music'} render={Music} />
                <Route path={'/settings'} render={Settings} />
                <Route path={'/login'} render={() => <LoginContainer />} />
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