import store from "./components/Redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 changeNewPostTextarea={store.changeNewPostTextarea.bind(store)}
                 addDialogMessage={store.addDialogMessage.bind(store)}
                 changeDialogMessage={store.changeDialogMessage.bind(store)} />
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); //Здесь мы используем ПАТЕРН НАБЛЮДАТЕЛЯ и подписываем функцию в стейт, на наш ререндер странички.