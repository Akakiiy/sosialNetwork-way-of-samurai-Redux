import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    const createComponentProfile = () => <Profile store={props.store} />
    const createComponentDialogs = () => <DialogsContainer store={props.store} />

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar store={props.store} />
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