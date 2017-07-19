import React, { Component } from "react";
import {
    Route, withRouter, Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'


//STATIC PAGES
import Home from './pages/Landing';
import About from './pages/Info/About';
import Code from './pages/Info/Code';
import FAQ from './pages/Info/FAQ';

//
import Register from './pages/Register';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import ConfirmEmail from './pages/ConfirmEmail';
import GithubAuth from './pages/GithubAuth';
import Dashboard from './pages/Dashboard';
import Application from './pages/Application';



const PrivateRoute = ({ component: Component, isAuthenticated, isAllowed, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated
        ? (isAllowed
            ? <Component {...props}/>
            : <div><h1>Permission Denied</h1>You don't have the rights to access this page.</div>)
        : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

class ExternalRedirect extends Component {
    constructor( props ){
        super();
        this.state = { ...props };
    }
    componentWillMount(){
        window.location = this.state.to;
    }
    render(){
        return (<h1>Redirecting...</h1>);
    }
}

const UserRoute = withRouter(connect((state) => ({isAuthenticated: state.user.authenticated, isAllowed: true}))(PrivateRoute));
const ExecRoute = withRouter(connect((state) => ({isAuthenticated: state.user.authenticated, isAllowed: state.user.tokenData && state.user.tokenData.roles.contains("exec")}))(PrivateRoute));

const Routes = () => (
    <div className="container">
      {/*Public Routes*/}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/code" component={Code}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/reset/:reset_token?" component={PasswordReset}/>
      <Route path="/confirm/:code" component={ConfirmEmail}/>


      <Route path="/auth/github" component={GithubAuth}/>

      {/*User Routes*/}
      <UserRoute path="/dashboard" component={Dashboard}/>
      <UserRoute path="/application" component={Application}/>
      {/*Exec Routes*/}
      <ExecRoute path="/exec/dashboard" component={Dashboard}/>

      {/*Offsite Redirects*/}
      <Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/>

      <Route path="/why-go-to-a-hackathon"  render={() => <ExternalRedirect to="https://medium.com/@BoilerMake/why-you-should-go-to-a-hackathon-2d4ede475c9"/>}/>
  </div>
);

export default Routes;
