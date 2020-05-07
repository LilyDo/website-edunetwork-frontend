import React, { Component } from 'react';
import './AccountBreadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_grey_arrow_down.svg';
import {
  getTranslatedText,
  getUserFormLocal,
} from '../../services/appService';
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
              <span>{getTranslatedText('dashboard')}</span>
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
                  <div>{getTranslatedText('personal_info')}</div>
                </Link>
                <Link to={routes.accountWallet}>
                  <div>{getTranslatedText('my_wallet')}</div>
                </Link>
                <Link to={routes.accountWithdraw}>
                  <div>{getTranslatedText('withdraw')}</div>
                </Link>
                {/*<Link to={routes.accountDeposit}>*/}
                {/*  <div>{getTranslatedText('deposit')}</div>*/}
                {/*</Link>*/}
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
              <span>{getTranslatedText('course')}</span>
            </Link>
            <Link
              to={routes.game}
              className={
                window.location.pathname === routes.accountCourses
                  ? 'ActiveTab'
                  : ''
              }
            >
              <span>Mini game</span>
            </Link>
          </div>
          <div className="AccountContainer">
            <div className="Text">{getTranslatedText('hello')}! </div>
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
