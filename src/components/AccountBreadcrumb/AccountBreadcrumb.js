import React, { Component } from 'react';
import './AccountBreadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_grey_arrow_down.svg';
import { getUserFormLocal } from '../../services/appService';
import { routes } from '../../constants';

class AccountBreadcrumb extends Component {
  state = {
    currentUser: {},
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
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
              to={routes.accountDashboard}
              className={
                window.location.pathname === routes.accountDashboard
                  ? 'ActiveTab'
                  : ''
              }
            >
              <span>Dashboard</span>
            </Link>

            <div className="profile-menu">
              <Link
                to={routes.accountProfile}
                className={
                  window.location.pathname === routes.accountProfile
                    ? 'ActiveTab'
                    : ''
                }
              >
                <span>Profile</span>
                <img alt="arrow down" src={ArrowDown}></img>
              </Link>

              <div className="dropdown-content">
                <Link to={routes.accountProfile}>
                  <div>Personal Information</div>
                </Link>
                <Link to={routes.accountWallet}>
                  <div>My Wallet</div>
                </Link>
                <Link to={routes.accountWithdraw}>
                  <div>Withdraw</div>
                </Link>
              </div>
            </div>

            <Link
              to={routes.accountCourses}
              className={
                window.location.pathname === routes.accountCourses
                  ? 'ActiveTab'
                  : ''
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
