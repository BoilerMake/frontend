import React from 'react';
import ConnectedInterestSignup, { InterestSignupForm } from './InterestSignupForm';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from "enzyme";
import fetchMock from 'fetch-mock';

it('does a successful interest signup', () =>  {
    fetchMock.restore();
    fetchMock.post('*', {success: true, data: 'message123'});
    let eventName = "hi";
    const wrapper = shallow(
        <InterestSignupForm recordEvent={(a,b,c)=>{eventName=a}} />);
    expect(wrapper.state('success')).toEqual(null);
    wrapper.setState({ email: "test@test.com" });

    wrapper.instance().handleSubmit().then(()=>{
        expect(eventName).toEqual('interestForm');
        expect(wrapper.state('success')).toEqual(true);
        expect(wrapper.state('message')).toEqual("message123");
    });
});

it('handles a failed interest signup', () =>  {
    fetchMock.restore();
    fetchMock.post('*', {success: false, message: 'errmsg123'});
    let eventName = "hi";
    const wrapper = shallow(
        <InterestSignupForm recordEvent={(a,b,c)=>{eventName=a}} />);

    wrapper.setState({ email: "test@test.com" });

    wrapper.instance().handleSubmit().then(()=>{
        expect(eventName).toEqual('interestForm');
        expect(wrapper.state('success')).toEqual(false);
        expect(wrapper.state('message')).toEqual("errmsg123");
    });
});