import './App.css';
import React, {ReactNode, Suspense, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {Users} from "./components/Users/Users";
import {getInitializationSelector} from "./components/Redux/selectors/app-selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./components/Redux/store-redux";
import {Layout} from 'antd';
import {AppHeader} from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {WithAuthLogged} from "./components/hoc/withAuthLogged";

const { Content} = Layout;

const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));
const ChatPage = React.lazy(() => import("./components/pages/ChatPage/ChatPage"));

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

    const ProfileContainerWithAuth = WithAuthLogged(ProfileContainer);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout className="site-layout" >
                <AppHeader bgc={'#ffffff'}/>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#ffffff' }}>
                        <Routes>
                            <Route path={'/profile/:userId?'} element={<ProfileContainerWithAuth/>}/>
                            <Route path={'/dialogs'} element={<Dialogs/>}/>
                            <Route path={'/users'} element={<Users/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                        </Routes>
                        {/*<Route path={'/login'} element={<Suspense fallback={<Preloader/>}><LoginContainer/></Suspense>/>*/}
                        {/*<Route path={'/chat'} render={<Suspense fallback={<Preloader/>}><ChatPage/></Suspense>/>*/}
                        {/*todo page for 404 error*/}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}