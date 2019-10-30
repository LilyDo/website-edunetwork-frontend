import React, { Component } from 'react';
import './AccountBreadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_grey_arrow_down.svg';

class AccountBreadcrumb extends Component {
  render() {
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
            <div class="Text">Xin chào! </div>
            <div class="Fullname"> Hồ Đức Lợi</div>
            <div class="Username">{'(loiho)'}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBreadcrumb;
