import state from "./components/Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addDialogMessage, addPost, changeDialogMessage, changeNewPostTextarea, subscribe} from "./components/Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 changeNewPostTextarea={changeNewPostTextarea}
                 addDialogMessage={addDialogMessage}
                 changeDialogMessage={changeDialogMessage} />
        </React.StrictMode>
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree); //Здесь мы используем ПАТЕРН НАБЛЮДАТЕЛЯ и подписываем функцию в стейт, на наш ререндер странички.