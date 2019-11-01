import React from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';

function HamburgerMenu() {
  return (
    <div className="HamburgerContainer">
      <Link to={routes.home} className="Menu Home">
        <span>HOME</span>
      </Link>
      <Link to={routes.courses} className="Menu Course">
        <span>COURSE</span>
      </Link>
      <Link to={routes.contact} className="Menu Contact">
        <span>CONTACT</span>
      </Link>
    </div>
  );
}

export default HamburgerMenu;
