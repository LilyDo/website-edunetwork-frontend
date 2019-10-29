import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AccountMenuPopup from '../../components/AccountMenuPopup/AccountMenuPopup';

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
          <Link to="/signin" className="SignInDesktop">
            <span>Sign in</span>
            <AccountMenuPopup />
          </Link>
        </div>
      </div>

      <div>
        <div className="LowerHeader">
          <div className="HamburgerMenu">
            <img alt="menu" src={HamburgerIcon} />
          </div>
          <Link to="/signin" className="SignInMobile">
            <span>Sign in</span>
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
