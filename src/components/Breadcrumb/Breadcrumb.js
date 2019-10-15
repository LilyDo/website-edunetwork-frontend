import React from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/images/arrow_right.svg';

function Breadcrumb() {
  return (
    <div className="BreadCrumb">
      <div className="Home">HOME</div>
      <div className="ArrowRight">
        <img alt="arrow right" src={ArrowRight} />
      </div>
      <div className="Current">COURSE</div>
    </div>
  );
}

export default Breadcrumb;
