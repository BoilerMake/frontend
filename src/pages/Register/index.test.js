import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedRegister, { Register } from './index';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from "enzyme";
import fetchMock from 'fetch-mock';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


it('renders without crashing', () =>  {

    fetchMock.post('*', {success: true, data: {token: "aa"}});
    let a = "hi";
    const wrapper = shallow(
        <Register
            loginFromJWT={(t)=>{a=t}}
            user={{authenticated: false}}
            location={{state: null}}
        />);

    wrapper.instance().handleSubmit({email: 'test@email.com', password: "hi"}).then(()=>{console.log(a)});

    // return expect(wrapper.instance().handleSubmit({email: 'test@email.com', password: "hi"})).resolves;
});

