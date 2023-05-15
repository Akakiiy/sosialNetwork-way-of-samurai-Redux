import store from "./components/Redux/store-redux";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from "./App";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // был убран <React.StrictMode>, так как тогда компонента рендерится дважды и вместо 4х пользователей выдает 8
    <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
    </HashRouter>
);
