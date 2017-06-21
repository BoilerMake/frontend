import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import '../assets/interest.scss';
import B from '../assets/images/b.png';

export class InterestSignupForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            message: null,
            success: null,
            email: ""
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
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
                    this.props.recordEvent("interestForm:submit_error",json.message);
                }
                else {
                    this.setState({message: json.data});
                    //upon success, clear the form.
                    this.setState({email: ""});
                    this.props.recordEvent("interestForm:submit_success")
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
              <h1 className="darkBlue">BoilerMake</h1>
              <h3 className="pink">Purdue University</h3>
              <h3 className="lightBlue">SEPT 29  - OCT 1 2017</h3>
              <br/>
              <label htmlFor="email"><p>Sign up for updates on when applications open!</p></label>
              <form className="interestForm"onSubmit={this.handleSubmit.bind(this)}>
                  <input id="email" name="email" type="email" value={this.state.email} onChange={this.changeEmail.bind(this)} placeholder="Email"/>
                  <button type="submit" disabled={!canSubmit}>Submit</button>
                  <p>{this.state.message}</p>
              </form>
            </div>
            <div className="flexchild">
              <img src={B} alt="boilermakev-logo" />
            </div>
          </div>
        );
    }
}

//now the redux integration layer
import { recordEvent } from '../actions/users';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    recordEvent: (event, context) => {
        dispatch(recordEvent(event, context));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(InterestSignupForm);
