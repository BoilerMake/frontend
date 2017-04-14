import React, { Component } from 'react';
import bm_logo from './bm_logo.png'
export default class Home extends Component {

    render () {
        return (
            <div style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
                <img src={bm_logo} alt="logo" className="App-logo"/>
            </div>
        );
    }
}

