import './App.css';
import React, {Suspense, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Users} from "./components/Users/Users";
import {getInitializationSelector} from "./components/Redux/selectors/app-selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./components/Redux/store-redux";
import {Layout, theme} from 'antd';
import {AppHeader} from "./components/Header/Header";
const { Content} = Layout;

const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));

type PropsType = {}
export const App: React.FC<PropsType> = () => {
    const initialization = useSelector(getInitializationSelector);
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();
    const setInitialization = () => {
        dispatch(initializeApp())
    }

    useEffect(() => {
        setInitialization();
    }, []);

    if (!initialization) {
        return <Preloader/>
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout className="site-layout" >
                <AppHeader bgc={'#ffffff'}/>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#ffffff' }}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <Users/>}/>
                        <Route path={'/settings'} render={Settings}/>
                        <Route path={'/login'} render={() => {
                            return (
                                <Suspense fallback={<Preloader/>}>
                                    <LoginContainer/>
                                </Suspense>
                            )
                        }}/>
                        {/*todo page for 404 error*/}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}