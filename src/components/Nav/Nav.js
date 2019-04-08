import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logoutUser } from '../../actions/users';
import logo from '../../assets/images/bm6_hammers.svg';
import './_pillar.nav.source.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      showing: false
    };
  }

  componentWillMount() {
    document.addEventListener('touchmove', this.handleClick, false);
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.handleClick, false);
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    // Don't interfere with menu button's operation e.target.closest(".p-nav__dropdown_mobile")
    if (
      !document
        .getElementsByClassName('p-nav__dropdown_mobile')[0]
        .contains(e.target)
    ) {
      this.setState({ showing: false });
    }
  };

  render() {
    const { showing } = this.state;
    const { user } = this.props;
    console.log(user);
    return (
      <div className="p-nav">
        <div className="p-nav_content">
          <div className="p-nav__logo">
            <Link to="/">
              <img
                src={logo}
                alt="BoilerMake logo"
                className="p-nav__logo--hammers"
              />
            </Link>
          </div>
          <nav className="p-nav__nav_links--mobile">
            <span
              className="p-nav__dropdown_mobile"
              onClick={() => this.setState({ showing: !showing })}
            >
              &#9776;
              {showing ? (
                <div className="p-nav__dropdown_mobile--content">
                  {/* <div className="p-nav__dropdown--account">
                    {user.authenticated ? (
                      <NavLink
                        exact
                        to="/application"
                        className="p-nav__dropdown_link--apply"
                      >
                        <Button>Application</Button>
                      </NavLink>
                    ) : (
                      <NavLink
                        exact
                        to="/register"
                        className="p-nav__dropdown_link--apply"
                      >
                        <Button>Apply</Button>
                      </NavLink>
                    )}
                    {user.authenticated ? (
                      <a
                        className="p-nav__dropdown_link"
                        onClick={this.props.logoutUser}
                      >
                        Logout
                      </a>
                    ) : (
                      <NavLink
                        exact
                        to="/login"
                        className="p-nav__dropdown_link"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
                  <hr /> */}
                  <NavLink exact to="/faq" className="p-nav__dropdown_link">
                    FAQ
                  </NavLink>
                  <NavLink exact to="/hackers" className="p-nav__dropdown_link">
                    Hackers
                  </NavLink>
                  <NavLink
                    exact
                    to="/sponsors"
                    className="p-nav__dropdown_link"
                  >
                    Sponsors
                  </NavLink>
                  <NavLink exact to="/about" className="p-nav__dropdown_link">
                    Team
                  </NavLink>
                </div>
              ) : null}
            </span>
          </nav>

          <nav className="p-nav__nav_links">
            <NavLink exact to="/hackers" className="p-nav__nav_link">
              Hackers
            </NavLink>
            <NavLink exact to="/sponsors" className="p-nav__nav_link">
              Sponsors
            </NavLink>
            <NavLink exact to="/about" className="p-nav__nav_link">
              Team
            </NavLink>
            <NavLink exact to="/faq" className="p-nav__nav_link">
              FAQ
            </NavLink>
            {/* {user.authenticated ? (
              <a className="p-nav__nav_link" onClick={this.props.logoutUser}>
                Logout
              </a>
            ) : (
              <NavLink exact to="/login" className="p-nav__nav_link">
                Login
              </NavLink>
            )}
            {user.authenticated ? (
              <NavLink
                exact
                to="/application"
                className="p-nav__nav_link p-nav__nav_link--apply"
              >
                <Button>Application</Button>
              </NavLink>
            ) : (
              <NavLink
                exact
                to="/register"
                className="p-nav__nav_link p-nav__nav_link--apply"
              >
                <Button>Apply</Button>
              </NavLink>
            )} */}
          </nav>
        </div>
      </div>
    );
  }
}

//now the redux integration layer
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
