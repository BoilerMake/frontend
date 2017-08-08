import React, { Component } from 'react';
import RegisterForm from './RegisterForm'
import { SubmissionError } from 'redux-form'
import { Redirect } from 'react-router-dom'
import apiFetch from '../../actions';
export class Register extends Component {

    constructor (props) {
        super(props);
        this.state = { redirectToReferrer: false };
    }

    handleSubmit = (values) => {
        let d = new FormData();
        d.append('email', values.email);
        d.append('password', values.password);
        return apiFetch('users/register',{
            method: 'POST',
            body: d
        }).then((response) => response.json())
            .then((json) => {
                if(json.success === false) {
                    throw new SubmissionError({_error: json.message});
                }
                else {
                    console.log(json.data.token);
                    this.props.loginFromJWT(json.data.token);
                }
            });
    };

    render () {
        if(this.props.user.authenticated)
            this.setState({ redirectToReferrer: true });
        const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };

        if (this.state.redirectToReferrer) {
            //redirect them to the route they came from (or dashboard) on successful auth.
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div className="authForm">
              <h1 className="title">Register</h1>
              <RegisterForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

//now the redux integration layer
import { loginFromJWT } from '../../actions/users';
import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        user: state.user
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    loginFromJWT: (token) => {
        dispatch(loginFromJWT(token));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
