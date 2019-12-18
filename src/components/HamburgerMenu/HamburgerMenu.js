import React, { Component } from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="HamburgerContainer">
        <Link
          to={routes.home}
          className="Menu Home"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>HOME</span>
        </Link>
        <Link
          to={routes.courses}
          className="Menu Course"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>COURSE</span>
        </Link>
        <Link
          to={routes.contact}
          className="Menu Contact"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>CONTACT</span>
        </Link>
      </div>
    );
  }
}

export default HamburgerMenu;
