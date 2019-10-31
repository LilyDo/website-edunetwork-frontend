import React, { Component } from 'react';
import './AccountBreadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_grey_arrow_down.svg';
import { getUserFormLocal } from '../../services/appService';

class AccountBreadcrumb extends Component {
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

  render() {
    this.checkCurrentUser();

    return (
      <div className="AccountBreadcrumb">
        <div className="Container">
          <div className="LinkContainer">
            <Link
              to="/account/dashboard"
              className={
                window.location.pathname === '/account/dashboard' &&
                'ActiveTab'
              }
            >
              <span>Dashboard</span>
            </Link>

            <div className="profile-menu">
              <Link
                to="/account/profile"
                className={
                  window.location.pathname === '/account/profile' &&
                  'ActiveTab'
                }
              >
                <span>Profile</span>
                <img alt="arrow down" src={ArrowDown}></img>
              </Link>

              <div className="dropdown-content">
                <Link to="/account/profile">
                  <div>Personal Information</div>
                </Link>
                <Link to="/account/profile/wallet">
                  <div>My Wallet</div>
                </Link>
                <Link to="/account/profile/withraw">
                  <div>Withraw</div>
                </Link>
              </div>
            </div>

            <Link
              to="/account/course"
              className={
                window.location.pathname === '/account/course' &&
                'ActiveTab'
              }
            >
              <span>Course</span>
            </Link>
          </div>
          <div className="AccountContainer">
            <div className="Text">Hello! </div>
            <div className="Fullname">
              {this.state.currentUser.name}
            </div>
            <div className="Username">
              {' '}
              ({this.state.currentUser.code})
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBreadcrumb;
