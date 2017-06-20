import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import '../assets/interest.scss';
import B from '../assets/images/b.png';

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
          <div className="con flexCon">
            <div className="flexchild">
              <h1 className="pink">BoilerMake</h1>
              <h3 className="pink">Purdue University</h3>
              <h3 className="lightBlue">SEPT 29  - OCT 1 2017</h3>
              <br/>
              <label htmlFor="email"><p>Sign up for updates on when applications open!</p></label>
              <div className="interestForm">
                  <input id="email" name="email" type="email" value={this.state.email} onChange={this.changeEmail.bind(this)} placeholder="Email"/>
                  <button type="submit" onClick={this.handleSubmit.bind(this)} disabled={!canSubmit}>Submit</button>
                  <p>{this.state.message}</p>
              </div>
            </div>
            <div className="flexchild">
              <img src={B} alt="boilermakev-logo" />
            </div>
          </div>
        );
    }
}
export default InterestSignupForm;
