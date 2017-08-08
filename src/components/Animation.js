import React, { Component } from 'react';
import sign from '../assets/images/animation/logo-sign.svg';
import pillars from '../assets/images/animation/pillars.svg';
import Register from '../pages/Register/RegisterForm';
import { SubmissionError } from 'redux-form';
import { Link, Redirect } from 'react-router-dom'

import apiFetch from '../actions';
import '../assets/_form.scss';
import '../assets/pillars.scss';

let images = 0;
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      imageLoaded: false,
      redirectToApplication: false
    };
  }
  expandLogin = () => {
    this.setState({ register: !this.state.register });
  }
  handleImageLoad = () => {
    if (images === 1) {
      this.setState({ imageLoaded: true });
    }
    images++;
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
                  this.setState({redirectToApplication: true});
              }
          });
    };
    render() {
    const { register, imageLoaded, redirectToApplication } = this.state;
    console.log('imageLoaded', imageLoaded);
    //redirect to application if they just succesfully registered.
    if (redirectToApplication) return (<Redirect to="/application"/>);
    return (
      <div className='animation'>
        <img className={`sign ${imageLoaded ? 'fadein' : 'none'}`} onLoad={this.handleImageLoad} src={sign} alt="logo-sign" />
        <div className="register">
          <h3>Purdue University • September 29 - October 1, 2017</h3>
            {/*Only show Register button if unauth'd user, and register form is not displayed*/}
            {
              this.props.user.me
                ? <Link to="/application" className="btn">Go to my Application</Link>
                : (!register ? <button className="btn" onClick={this.expandLogin}>register</button> : null)
            }
        </div>
        {this.state.register ? (
          <div className="login-form authFormNoBackground">
            <Register onSubmit={this.handleSubmit}/>
          </div>
        ) : <img className={`pillars ${imageLoaded ? 'fadein' : 'none'}`} onLoad={this.handleImageLoad} src={pillars} alt="pillars" /> }
      </div>
    );
  }
}

//now the redux integration layer
import { loginFromJWT } from '../actions/users';
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

export default connect(mapStateToProps, mapDispatchToProps)(Animation);
