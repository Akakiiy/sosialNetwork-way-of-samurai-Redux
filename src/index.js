import store from "./components/Redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

// store.subscribe(() => { это наша подписка на ререндер дерева
//     let state = store.getState(); так как redux не сообщает подпищикам что в них приходит, то есть не передает стейт
//     rerenderEntireTree(state);  мы делаем это в речную, извлекая стейт из стора и передавая вне редакса
// }); так как я сразу переписал, на грубый проброс стора до Контейнерных компонентов перепишем по нормальному....

store.subscribe(rerenderEntireTree);