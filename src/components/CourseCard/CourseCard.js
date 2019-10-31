import React, { Component } from 'react';
import './CourseCard.scss';

class CourseCard extends Component {
  render() {
    const { courseCarouselItem } = this.props;

    return (
      <div className="InfoCardContainer">
        <div className="Level">{courseCarouselItem.level}</div>
        <img
          src={require(`../../assets/images/${courseCarouselItem.level.toLowerCase()}_background.png`)}
          alt="carousel background"
        />
        <div className="Title">{courseCarouselItem.title}</div>
        <div className="PayContainer">
          <div className="PayNow">THANH TOÁN NGAY</div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
