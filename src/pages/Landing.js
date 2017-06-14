import React, { Component } from 'react';
import Interest from '../components/InterestSignupForm';
import bm_logo from '../assets/images/bm_logo.png'
export default class Landing extends Component {

    render () {
        return (
            <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
                <img src={bm_logo} alt="logo" className="App-logo"/>
                <Interest/>
            </div>
        );
    }
}

