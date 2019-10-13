import React from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';

function Breadcrumb() {
  return (
    <div className="Breadcrumb">
      <div className="Text">
        <Link to="/">
          <span>HOME</span>
        </Link>
      </div>
      <div className="Arrow">
        <img src={ArrowRight} alt="arrow right" />
      </div>
      <div className="Text">
        <Link to="/courses">
          <span>COURSE</span>
        </Link>
      </div>
    </div>
  );
}

export default Breadcrumb;
