import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DataContextProvider from "./contexts/DataContextProvider";

export const contextProviders = [
    DataContextProvider
];

const getAppWithContextProviders = () => {
    let result = <App/>;
    contextProviders.forEach(
        (Provider) => (result = <Provider>{result}</Provider>)
    );

    return result;
};


ReactDOM.render(
    getAppWithContextProviders(),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
