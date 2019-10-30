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

const currentUser = localStorage.getItem('current_user');

class Header extends Component {
  state = {
    isLogined: false,
    currentUser: {},
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.isLogined = true;
      this.state.currentUser = getUserFormLocal();
    }
  }

  doLogout() {
    localStorage.removeItem('current_user');
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
              <Link to="/" className="NavigationLink">
                <span>HOME</span>
              </Link>
              <Link to="/courses" className="NavigationLink">
                <span>COURSE</span>
              </Link>
              <Link to="/contact" className="NavigationLink">
                <span>CONTACT</span>
              </Link>
            </div>
            {!this.state.isLogined && (
              <Link to="/signin">
                <div className="SignInDesktop">
                  <span>Sign in</span>
                  <AccountMenuPopup />
                </div>
              </Link>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  src={
                    this.state.currentUser.avatar ||
                    'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                  }
                />
                <div className="NameHeader">
                  {this.state.currentUser.name}
                </div>
                <div class="dropdown-content">
                  <Link to="/signin">
                    <div>User Profile</div>
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
                <Link to="/signin">
                  <span>Sign in</span>
                </Link>
              </div>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  src={
                    this.state.currentUser.avatar ||
                    'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                  }
                />
                <div className="NameHeader">
                  {this.state.currentUser.name}
                </div>
                <div class="dropdown-content">
                  <Link to="/signin">
                    <div>User Profile</div>
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
