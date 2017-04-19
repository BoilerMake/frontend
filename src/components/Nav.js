import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {NavbarToggler, Collapse } from 'reactstrap';
class Nav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render () {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <a className="navbar-brand" href="#">BM <NavbarToggler right onClick={this.toggle} /></a>

                <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
                        <li className="nav-item"><NavLink to="/register" className="nav-link" activeClassName="active">Register</NavLink></li>
                        <li className="nav-item"><NavLink to="/login" className="nav-link" activeClassName="active">Log In</NavLink></li>
                        <li className="nav-item"><NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink></li>
                        <li className="nav-item"><a className="nav-link">auth'd: {this.props.isLoggedIn ? 'yes' : 'no'}</a></li>
                    </ul>
                </Collapse>
            </nav>
        );
    }
}

import { connect } from 'react-redux'
function mapStateToProps (state) {
    return {
        isLoggedIn: state.user.authenticated
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);