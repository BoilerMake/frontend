import React, { Component } from 'react';
import LoginForm from './LoginForm'
import { SubmissionError } from 'redux-form'
import { API_BASE_URL } from '../../config';
class Login extends Component {


    handleSubmit = (values) => {
        let d = new FormData();
        d.append('email', values.email);
        d.append('password', values.password);
        return fetch(`${API_BASE_URL}/users/login`,{
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
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.handleSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);