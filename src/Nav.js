import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {NavbarToggler, Collapse } from 'reactstrap';
export default class Nav extends Component {
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
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        </li>
                    </ul>
                </Collapse>
            </nav>
        );
    }
}
