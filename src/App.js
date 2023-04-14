import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    const createComponentProfile = () => <Profile state={props.state.profilePage}
                                                  addPost={props.addPost}
                                                  changeNewPostTextarea={props.changeNewPostTextarea} />
    const createComponentDialogs = () => <Dialogs state={props.state.dialogPage}
                                                  addDialogMessage={props.addDialogMessage}
                                                  changeDialogMessage={props.changeDialogMessage} />

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebar}/>
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