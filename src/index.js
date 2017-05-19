import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import cookie from 'react-cookie';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import { loginFromJWT } from './actions/users';
const store = configureStore();

const token = cookie.load('token');
// if (token) store.dispatch({ type: 'LOGIN_FROM_JWT_SUCCESS', token });//log us in from cookie
if (token) store.dispatch(loginFromJWT(token));//log us in from cookie


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
