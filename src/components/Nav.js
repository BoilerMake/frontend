import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/hammers.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    const { menu } = this.state;
    const { isLoggedIn, logout } = this.props;
      return (
        <div className="bgwhite navContainer">
          <NavLink exact to="/" className="navLogo">
            <img src={logo} alt='boilermake' className='hammers'/>
            <NavLink exact to='/' className='pink logo'>BoilerMake</NavLink>
          </NavLink>
          <nav className="navBar desktop">
            <NavLink exact to='/faq' className='navLink hover'>FAQ</NavLink>
            <a href="http://bit.ly/bm-sponsorship-2017" target="blank" className='navLink hover'>Sponsors</a>
            <a href="mailto:team@boilermake.org" target="blank" className='navLink hover'>Contact</a>
            { isLoggedIn ? (
              <NavLink export to="/" className="btn" onClick={logout}>
              Log Out
              </NavLink>
            ) : (
              <NavLink export to="/login" className=" btn">
                Login
              </NavLink>
            )}
          </nav>
          <nav className="navBar mobile">
            <button onClick={this.toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </nav>
          { menu ? (
            <div className="menu">
              <NavLink exact to='/faq' className='navLink'><span className="hover">FAQ</span></NavLink>
              <a href="http://bit.ly/bm-sponsorship-2017" target="blank" className="navLink"><span className="hover">Sponsors</span></a>
              <a href="mailto:team@boilermake.org" target="blank" className="navLink"><span className="hover">Contact</span></a>
              { isLoggedIn ? (
                <NavLink exact to='/login' className='navLink'><span className="hover">Login</span></NavLink>
              ) : (
                <NavLink exact to='/' onClick={logout} className='navLink'><span className="hover">Log Out</span></NavLink>
              )}
            </div>
          ) : null
          }
        </div>
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
