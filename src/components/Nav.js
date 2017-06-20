import React from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/hammers.svg';

const Nav = () => (
  <div>
    <div className="navLogo">
      <img src={logo} alt='boilermake' className='hammers logo'/>
      <NavLink exact to='/' className='pink logo'>BoilerMake</NavLink>
    </div>
    <nav className="navBar">
      <NavLink exact to='/' className='navLink'>Home</NavLink>
      <NavLink exact to='/sponsors' className='navLink'>Sponsors</NavLink>
      <NavLink exact to='/contact' className='navLink'>Contact</NavLink>
    </nav>
  </div>
);

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
