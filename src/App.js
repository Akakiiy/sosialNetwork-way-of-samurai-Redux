import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = ({state}) => {

    const createComponentProfile = () => <Profile state={state.profilePage} />
    const createComponentDialogs = () => <Dialogs state={state.dialogPage} />

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={createComponentProfile}/>
                    <Route path={'/dialogs'} render={createComponentDialogs}/>
                    <Route path={'/news'} render={News}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/settings'} render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
