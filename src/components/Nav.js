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
      return (
        <div className="bgwhite navContainer">
          <div className="navLogo">
            <img src={logo} alt='boilermake' className='hammers logo'/>
            <NavLink exact to='/' className='pink logo'>BoilerMake</NavLink>
          </div>
          <nav className="navBar desktop">
            <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
            <a href="http://bit.ly/bm-sponsorship-2017" target="blank" className='navLink'>Sponsors</a>
            <a href="mailto:team@boilermake.org" target="blank" className='navLink'>Contact</a>
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
              <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
              <a href="http://bit.ly/bm-sponsorship-2017" target="blank" className='navLink'>Sponsors</a>
              <a href="mailto:team@boilermake.org" target="blank" className='navLink'>Contact</a>
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
