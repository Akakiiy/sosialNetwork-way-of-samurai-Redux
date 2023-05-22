import './App.css';
import React, {Suspense, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Settings from "./components/pages/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./components/Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {Users} from "./components/pages/Users/Users";
import {getInitializationSelector} from "./components/Redux/selectors/app-selectors";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./components/Redux/store-redux";
import {Layout} from 'antd';
import {AppHeader} from "./components/Header/Header";
import Dialogs from "./components/pages/Dialogs/Dialogs";
import {ProfileContainer} from "./components/pages/Profile/ProfileContainer";
import {WithAuthLogged} from "./components/hoc/withAuthLogged";

const { Content} = Layout;

const LoginPage = React.lazy(() => import("./components/Login/Login"));
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
    const ChatPageWithAuth = WithAuthLogged(ChatPage)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout className="site-layout" >
                <AppHeader bgc={'#ffffff'}/>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#ffffff' }}>
                        <Suspense fallback={<Preloader />}>
                            <Routes>
                                {/*todo welcome page with path={'/'}*/}
                                <Route path={'/profile/:userId?'} element={<ProfileContainerWithAuth/>}/>
                                <Route path={'/dialogs'} element={<Dialogs/>}/>
                                <Route path={'/users'} element={<Users/>}/>
                                <Route path={'/settings'} element={<Settings/>}/>
                                <Route path={'/login'} element={<LoginPage/>} />
                                <Route path={'/chat'} element={<ChatPageWithAuth/>} />
                                {/*todo page for 404 error*/}
                            </Routes>   
                        </Suspense>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}