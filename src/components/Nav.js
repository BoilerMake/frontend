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
    this.handleLogout = this.handleLogout.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  handleClick(e) {
    this.setState({ menu: false });
  }
  handleLogout(e) {
    this.setState({ menu: false });
    this.props.logout();
  }
  render() {
    const { menu } = this.state;
    const { isLoggedIn, isExec } = this.props;
      return (
        <div className="bgwhite navContainer">
          <div className="navLogo">
            <img src={logo} alt='boilermake' className='hammers'/>
            <NavLink exact to='/' className='pink logo'>BoilerMake</NavLink>
          </div>
          <nav className="navBar desktop">
            <a href="mailto:team@boilermake.org" target="blank" className='navLink hover'>Contact</a>
            <NavLink exact to='/about' className='navLink hover'>About</NavLink>
            { isLoggedIn ?
              <NavLink exact to='/application' className='navLink hover' >application</NavLink>
            :
              null
            }
            {
                isExec
                ? <NavLink exact to='/exec' className='navLink hover'>exec dash</NavLink>
                : null
            }
            { isLoggedIn ? (
              <NavLink exact to="/" className="btn" onClick={this.handleLogout}>
                Log Out
              </NavLink>
            ) : (
              <NavLink exact to="/login" className="btn">
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
            <div className="menu" onClick={this.handleClick}>
              <a href="mailto:team@boilermake.org" target="blank" className="navLink"><span className="hover">Contact</span></a>
              <NavLink exact to='/about' className='navLink hover'>About</NavLink>
              { isLoggedIn ? (
                <NavLink exact to='/' onClick={this.handleLogout} className='navLink'><span className="hover">Log Out</span></NavLink>
              ) : (
                <NavLink exact to='/login' className='navLink'><span className="hover">Login</span></NavLink>
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
        isLoggedIn: state.user.authenticated,
        isExec: state.user.isExec
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => {dispatch(logoutUser())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
