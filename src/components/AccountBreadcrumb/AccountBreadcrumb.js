import React from 'react';
import './AccountBreadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_grey_arrow_down.svg';

function AccountBreadcrumb() {
  return (
    <div className="AccountBreadcrumb">
      <div className="Container">
        <div className="LinkContainer">
          <Link to="/account/dashboard" className="AccountDashboard">
            <span>Dashboard</span>
          </Link>

          <Link to="/account/profile" className="AccountProfile">
            <span>Profile</span>
            <img alt="arrow down" src={ArrowDown}></img>
          </Link>

          <Link to="/account/course" className="" AccountCourse>
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

export default AccountBreadcrumb;
