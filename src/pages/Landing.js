import React, { Component } from 'react';
import Interest from '../components/InterestSignupForm';
import bm_logo from '../assets/images/hammers.svg'

export default class Landing extends Component {

    render () {
        return (
            <div>
                <img src={bm_logo} alt="logo" className=""/>
                <Interest/>
            </div>
        );
    }
}
