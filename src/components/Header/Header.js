import React from 'react';
import './Header.scss';
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
              <span>HOME</span>
            </div>
            <div className="NavigationLink">
              <span>COURSE</span>
            </div>
            <div className="NavigationLink">
              <span>CONTACT</span>
            </div>
          </div>
          <div className="SignInDesktop">
            <span>Sign in</span>
          </div>
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
