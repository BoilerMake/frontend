import React, { Component } from 'react';
import { API_BASE_URL } from '../config';

class InterestSignupForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            message: null,
            success: null,
            email: ""
        };
    }
    handleSubmit = () => {
        let d = new FormData();
        d.append('email', this.state.email);
        return fetch(`${API_BASE_URL}/interest/signup`,{
            method: 'POST',
            body: d
        }).then((response) => response.json())
            .then((json) => {
                this.setState({success: json.success});
                if(json.success === false) {
                    this.setState({message: json.message});
                }
                else {
                    this.setState({message: json.data});
                }
            });
    };
    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    render () {
        let canSubmit = (this.state.email.length > 3);
        return (
            <div>
                <input name="email" type="email" value={this.state.email} onChange={this.changeEmail.bind(this)} placeholder="Email"/>
                <button type="submit" onClick={this.handleSubmit.bind(this)} disabled={!canSubmit}>Submit</button>
                <p>{this.state.message}</p>
            </div>);
    }
}
export default InterestSignupForm;
