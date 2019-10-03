import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <div className="UpperHeader">
        <div className="LanguageSelector">
          English
        </div>
      </div>
      <div className="LowerHeader">
        <div className="HamburgerMenu">
          hamburger
        </div>
        <div className="NavigationLinks">
          <div className="NavigationLink">
            HOME
          </div>
          <div className="NavigationLink">
            COURSE
          </div>
          <div className="NavigationLink">
            CONTACT
          </div>
        </div>
        <div className="SignIn">
          Sign in
        </div>
      </div>
    </div>
  );
}

export default Header;
