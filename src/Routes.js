import React, { Component } from "react";
import {
    Route, withRouter, Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import Nav from './components/Nav';

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
import Animation from './components/Animation';

import ExecContainer from "./pages/Exec/ExecContainer";
import ExecUsers from "./pages/Exec/ExecUsers";
import ExecUserDetail from "./pages/Exec/ExecUserDetail";
import ExecApplications from "./pages/Exec/ExecApplications";
import ExecApplicationDetail from "./pages/Exec/ExecApplicationDetail";
import ExecDashboard from "./pages/Exec/ExecDashboard";


const PrivateRoute = ({ component: Component, isAuthenticated, isAllowed, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated
        ? (isAllowed
            ? <Component {...props}/>
            : <div><h1>Permission Denied</h1>You do not have the rights to access this page.</div>)
        : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

const ContainerSwitcherRoute = ({ children, location, ...rest }) => {
    return location.pathname.includes("/exec")
        ? (<ExecContainer>{children}</ExecContainer>)
        : (<div><Nav/>{children}</div>);
};

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
const ExecRoute = withRouter(connect((state) => ({isAuthenticated: state.user.authenticated, isAllowed: state.user.isExec}))(PrivateRoute));
const ContainerSwitcher = withRouter(ContainerSwitcherRoute);

const Routes = () => (
    <ContainerSwitcher>
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

      <Route path='/animation' component={Animation} />
      {/*User Routes*/}
      <UserRoute path="/dashboard" component={Dashboard}/>
      <UserRoute path="/application" component={Application}/>

      {/*Exec Routes. Everything under /exec gets rendered inside <ExecContainer/>*/}
      <ExecRoute path="/exec" exact component={ExecDashboard} />
      <ExecRoute exact path="/exec/users" component={ExecUsers} />
      <ExecRoute path="/exec/users/:userId" component={ExecUserDetail} />
      <ExecRoute exact path="/exec/applications" component={ExecApplications} />
      <ExecRoute path="/exec/applications/:applicationId" component={ExecApplicationDetail} />

      {/*Offsite Redirects*/}
      <Route path="/why-go-to-a-hackathon"  render={() => <ExternalRedirect to="https://medium.com/@BoilerMake/why-you-should-go-to-a-hackathon-2d4ede475c9"/>}/>
  </ContainerSwitcher>
);

export default Routes;
