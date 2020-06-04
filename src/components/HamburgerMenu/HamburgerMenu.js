import React, { Component } from 'react';
import './HamburgerMenu.scss';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="HamburgerContainer">
        <Link
          to={routes.home}
          className="Menu Home"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>{getTranslatedText('home').toUpperCase()}</span>
        </Link>
        <Link
          to={routes.courses}
          className="Menu Course"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>{getTranslatedText('course').toUpperCase()}</span>
        </Link>
        <Link
          to={routes.quiz.rank}
          className="Menu Course"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>{getTranslatedText('quiz_rank').toUpperCase()}</span>
        </Link>
        <Link
          to={routes.contact}
          className="Menu Contact"
          onClick={this.props.toggleHamburgerMenu}
        >
          <span>{getTranslatedText('contact').toUpperCase()}</span>
        </Link>
      </div>
    );
  }
}

export default HamburgerMenu;
