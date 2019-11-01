import React, { Component } from 'react';
import './CourseCard.scss';

class CourseCard extends Component {
  render() {
    const { courseCarouselItem, onPayClick } = this.props;

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
        <div className="Title">{courseCarouselItem.title}</div>
        <div className="PayContainer">
          <div
            className="PayNow"
            onClick={() => this.props.onPayClick(courseCarouselItem)}
          >
            THANH TOÁN NGAY
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
