import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';


import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
