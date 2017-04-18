import React, { Component } from 'react';
class Code extends Component {

    render () {
        return (
            <div>
                <h1>Code at Boilermake</h1>
                <a href="http://github.com/boilermake">github.com/BoilerMake</a>
                <hr/>
                <h2>current projects</h2>
                frontend web: <a href="http://github.com/boilermake/frontend" target="_blank">boilermake/frontend</a> (React)
                <br/>
                backend API: <a href="http://github.com/boilermake/backend" target="_blank">boilermake/backend</a> (PHP + Laravel)
                <h2>old projects</h2>
                checkin QR code scanner: <a href="http://github.com/boilermake/checkin-scanner" target="_blank">boilermake/checkin-scanner</a> (Ionic Framework + AngularJS)
                <br/>
                frontend-iv: <a href="http://github.com/boilermake/frontend-iv" target="_blank">boilermake/frontend-v</a> (AngularJS + Bootstrap)

            </div>
        );
    }
}

export default Code;
