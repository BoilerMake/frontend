import React from 'react'
import {
    Route, withRouter, Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'


//STATIC PAGES
import Home from './pages/Landing';
import About from './pages/About';
import Code from './pages/Code';

//
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';



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

const UserRoute = withRouter(connect((state) => ({isAuthenticated: state.user.authenticated, isAllowed: true}))(PrivateRoute));
const ExecRoute = withRouter(connect((state) => ({isAuthenticated: state.user.authenticated, isAllowed: state.user.tokenData && state.user.tokenData.roles.contains("exec")}))(PrivateRoute));

const Routes = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/code" component={Code}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>

        <UserRoute path="/dashboard" component={Dashboard}/>
        <ExecRoute path="/exec/dashboard" component={Dashboard}/>
    </div>
);

export default Routes;

