import React from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  return (
    <div className="HamburgerContainer">
      <Link to="/" className="Menu Home">
        <span>HOME</span>
      </Link>
      <Link to="/courses" className="Menu Course">
        <span>COURSE</span>
      </Link>
      <Link to="/contact" className="Menu Contact">
        <span>CONTACT</span>
      </Link>
    </div>
  );
}

export default HamburgerMenu;
