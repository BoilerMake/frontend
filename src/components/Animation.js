import React, { Component } from 'react';
import sign from '../assets/images/animation/logo-sign.svg';
import pillars from '../assets/images/animation/pillars.svg';
import Register from '../pages/Register/RegisterForm';
import { SubmissionError } from 'redux-form';
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
      return apiFetch('users/login',{
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
  render() {
    const { register, imageLoaded } = this.state;
    console.log('imageLoaded', imageLoaded);
    return (
      <div className='animation'>
        <img className={`sign ${imageLoaded ? 'fadein' : 'none'}`} onLoad={this.handleImageLoad} src={sign} alt="logo-sign" />
        <div className="register">
          <h3>Purdue University • September 29 - October 1, 2017</h3>
          {!register ? <button className="btn" onClick={this.expandLogin}>register</button> : null}
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
