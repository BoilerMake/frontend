import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/hammers.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  handleClick(e) {
    this.setState({ menu: false });
  }
  render() {
    const { menu } = this.state;

    return (
      <div className="max-width">
        <div className="navContainer">
          <div className="navLogo">
            <Link to="/"><img src={logo} alt="BoilerMake logo" className="hammers"/></Link>
          </div>
          <nav className="navLinks desktop">
            <NavLink exact to='/hackers' className='navLink'>Hackers</NavLink>
            <NavLink exact to='/sponsors' className='navLink'>Sponsors</NavLink>
            <NavLink exact to='/about' className='navLink'>About</NavLink>
            <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
          </nav>
          {/* Not exactly navLinks, but it holds the same place on the page */}
          <nav className="navLinks mobile">
            <button onClick={this.toggleMenu}>
              <span className="hamburgerMenuBar"></span>
              <span className="hamburgerMenuBar"></span>
              <span className="hamburgerMenuBar"></span>
            </button>
          </nav>
          { menu ? (
            <div className="hamburgerMenu mobile padding" onClick={this.handleClick}>
              <ul>
                <li>
                  <NavLink exact to='/hackers' className='navLink'>Hackers</NavLink>
                </li>
                <li>
                  <NavLink exact to='/sponsors' className='navLink'>Sponsors</NavLink>
                </li>
                <li>
                  <NavLink exact to='/about' className='navLink'>About</NavLink>
                </li>
                <li>
                  <NavLink exact to='/faq' className='navLink'>FAQ</NavLink>
                </li>
              </ul>
            </div>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Nav;
