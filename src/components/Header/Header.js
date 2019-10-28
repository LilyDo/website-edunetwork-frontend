import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';

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
          <div className="SignInDesktop">Sign in</div>
        </div>
      </div>

      <div>
        <div className="LowerHeader">
          <div className="HamburgerMenu">
            <img alt="menu" src={HamburgerIcon} />
          </div>
          <div className="SignInMobile">
            <span>Sign in</span>
          </div>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
