import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import App from './App';
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux"
import reducers from './reducers'
import './index.css'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
