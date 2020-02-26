import React, { Component, Fragment } from 'react';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/images/arrow_right.svg';

class Breadcrumb extends Component {
  render() {
    const { data = [] } = this.props;
    return (
      <div className="BreadCrumb">
        {data.map((menu, index) => (
          <Fragment key={index}>
            <Link to={menu.link} className="BreadcrumbItem">
              <span>{menu.text.toUpperCase()}</span>
            </Link>
            {index !== data.length - 1 && (
              <div className="ArrowRight">
                <img alt="arrow right" src={ArrowRight} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Breadcrumb;
