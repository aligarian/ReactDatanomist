import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider } from 'react-redux';
import {createStore } from 'redux';
import './index.css';
import App from './App';
import Constants from './constants/constants';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

const INITIAL_STATE = {
    categories: []
 }
function counter(state = INITIAL_STATE.categories, action) {
    
    switch (action.type) {
        case Constants.FETCH_CATEGORIES:
            return action.data
        case Constants.FETCH_CATEGORIES_BY_ID:
            return action.data
        default:
            return state
    }
}
let store = createStore(counter);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
