import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render () {
        return (
            <nav className="navBar">
              <NavLink exact to='/' className='navLink'>Home</NavLink>
              <NavLink exact to='/about' className='navLink'>About</NavLink>
              <NavLink exact to='/sponsors' className='navLink'>Sponsors</NavLink>
              <NavLink exact to='/gallery' className='navLink'>Gallery</NavLink>
              <NavLink exact to='/contact' className='navLink'>Contact</NavLink>
            </nav>
        );
    }
}

import { connect } from 'react-redux'
import { logoutUser } from '../actions/users';
function mapStateToProps (state) {
    return {
        isLoggedIn: state.user.authenticated
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => {dispatch(logoutUser())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
