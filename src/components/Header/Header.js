import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';

function Header() {
  return (
    <div className="Header">
      <div className="UpperHeader">
        <div className="LanguageSelector">
          <div className="text">English</div>
          <img alt="option" src={ArrowDown} />
        </div>
        <div className="UpperHeaderlinks">
          <div className="NavigationContainer">
            <div className="NavigationLink">
              <span>
                <Link to="/">HOME</Link>
              </span>
            </div>
            <div className="NavigationLink">
              <Link to="/courses">COURSE</Link>
            </div>
            <div className="NavigationLink">
              <span>
                <Link to="/contact">CONTACT</Link>
              </span>
            </div>
          </div>
          <div className="SignInDesktop">Sign in</div>
        </div>
      </div>

      <div className="LowerHeader">
        <div className="HamburgerMenu">
          <img alt="menu" src={HamburgerIcon} />
        </div>
        <div className="SignInMobile">
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
