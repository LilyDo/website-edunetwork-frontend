import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AccountMenuPopup from '../../components/AccountMenuPopup/AccountMenuPopup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserFormLocal } from '../../services/appService';
import { routes } from '../../constants';

class Header extends Component {
  state = {
    isLogined: false,
    currentUser: getUserFormLocal(),
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.currentUser = getUserFormLocal();
      this.state.isLogined = true;
    }
  }

  doLogout() {
    localStorage.removeItem('current_user');
    localStorage.removeItem('token');
    this.checkCurrentUser();
    setTimeout(function() {
      window.location.pathname = '/';
    }, 500);
  }

  render() {
    this.checkCurrentUser();

    return (
      <div className="Header">
        <div className="UpperHeader">
          <div className="LanguageSelector">
            <div className="text">English</div>
            <img alt="option" src={ArrowDown} />
          </div>
          <div className="UpperHeaderlinks">
            <div className="NavigationContainer">
              <Link to={routes.home} className="NavigationLink">
                <span>HOME</span>
              </Link>
              <Link to={routes.courses} className="NavigationLink">
                <span>COURSE</span>
              </Link>
              <Link to={routes.contact} className="NavigationLink">
                <span>CONTACT</span>
              </Link>
            </div>
            {!this.state.isLogined && (
              <Link to={routes.signin}>
                <div className="SignInDesktop">
                  <span>Sign in</span>
                  <AccountMenuPopup />
                </div>
              </Link>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  alt="user profile"
                  src={
                    this.state.currentUser.avatar ||
                    'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                  }
                />
                <div className="NameHeader">
                  {this.state.currentUser.name}
                </div>
                <div className="dropdown-content">
                  <Link to={routes.accountDashboard}>
                    <div>Dashboard</div>
                  </Link>
                  <Link to={routes.accountProfile}>
                    <div>My Profile</div>
                  </Link>
                  <Link to={routes.accountCourses}>
                    <div>My Course</div>
                  </Link>
                  <div onClick={this.doLogout.bind(this)}>Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="LowerHeader">
            <div className="HamburgerMenu">
              <img alt="menu" src={HamburgerIcon} />
            </div>
            {!this.state.isLogined && (
              <div className="SignInMobile">
                <Link to={routes.signin}>
                  <span>Sign in</span>
                </Link>
              </div>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  alt="user profile"
                  src={
                    this.state.currentUser.avatar ||
                    'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                  }
                />
                <div className="NameHeader">
                  {this.state.currentUser.name}
                </div>
                <div className="dropdown-content">
                  <Link to={routes.accountDashboard}>
                    <div>Dashboard</div>
                  </Link>
                  <Link to={routes.accountProfile}>
                    <div>My Profile</div>
                  </Link>
                  <Link to={routes.accountCourses}>
                    <div>My Course</div>
                  </Link>
                  <div onClick={this.doLogout.bind(this)}>Logout</div>
                </div>
              </div>
            )}
          </div>
          <HamburgerMenu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({}, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
