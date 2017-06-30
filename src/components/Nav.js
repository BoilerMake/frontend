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
      <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
      <a href="http://bit.ly/bm-sponsorship-2017" target="blank" className='navLink'>Sponsors</a>
      <a href="mailto:team@boilermake.org" target="blank" className='navLink'>Contact</a>
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
