import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm  from './RegisterForm';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from "enzyme";

import { createStore } from 'redux';
import { Provider } from 'react-redux';


it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(() => ({}));
    ReactDOM.render(
        <Provider store={store}>
            <RegisterForm/>
        </Provider>
        , div);
});

