import React, { Component } from 'react';
import './CourseCard.scss';
import { routes } from '../../constants';
import { Link } from 'react-router-dom';

class CourseCard extends Component {
  render() {
    const { courseCarouselItem } = this.props;

    return (
      <div className="CourseCardContainer">
        <div className="Level">{courseCarouselItem.level}</div>
        <img
          src={require(`../../assets/images/${courseCarouselItem.level.toLowerCase()}_background.jpg`)}
          alt="carousel background"
        />
        <div className="Price">
          <div className="ContentWrapper">
            <span className="Amount">{courseCarouselItem.price}</span>
            <sup className="Currency">USD</sup>
          </div>
        </div>
        <div className="TitleButtonGroup">
          <div className="Title">{courseCarouselItem.title}</div>
          <div className="PayContainer">
            <Link
              to={routes.courseDetail.replace(
                ':id',
                courseCarouselItem.id,
              )}
            >
              <div className="PayNow">XEM CHI TIẾT</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
