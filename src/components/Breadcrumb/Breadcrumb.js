import React from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/images/arrow_right.svg';

function Breadcrumb() {
  return (
    <div className="BreadCrumb">
      <Link to="/" className="Home">
        <span>HOME</span>
      </Link>
      <div className="ArrowRight">
        <img alt="arrow right" src={ArrowRight} />
      </div>
      <Link to="/courses" className="Current">
        <span>COURSE</span>
      </Link>
      <div className="ArrowRight">
        <img alt="arrow right" src={ArrowRight} />
      </div>
      <Link to="/courses/mycourse" className="MyCourse">
        <span>KHÓA HỌC CỦA TÔI</span>
      </Link>
    </div>
  );
}

export default Breadcrumb;
