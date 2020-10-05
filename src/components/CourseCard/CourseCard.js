import React, { Component } from 'react';
import './CourseCard.scss';
import { routes } from '../../constants';
import { Link } from 'react-router-dom';
import { currencyFormatter, getTranslatedText } from '../../services/appService';

class CourseCard extends Component {
  render() {
    const { courseCarouselItem, isBought } = this.props;
    const lang = localStorage.getItem("current_lang");

    return (
      <div className="CourseCard">
        <div className="Level">{courseCarouselItem.level}</div>
        <img
          src={require(`../../assets/images/${courseCarouselItem.level.toLowerCase()}_background.jpg`)}
          alt="carousel background"
        />
        <div className="Price">
          <div className="ContentWrapper">
            <span className="Amount">{currencyFormatter((lang == "vi")? courseCarouselItem.price * 24000 : courseCarouselItem.price, true)}</span>
            <sup className="Currency">{(lang == "vi")? "đ" : "USD"}</sup>
          </div>
        </div>
        <div className="text-center">
          <span style={{fontSize: "12px"}}>(Chưa bao gồm VAT)</span>
        </div>
        <div className="TitleButtonGroup">
          <div className="Title">{(lang == "vi")? courseCarouselItem.title_vi : courseCarouselItem.title}</div>
          <div className="PayContainer">
            <Link
              to={routes.courseDetail.replace(
                ':id',
                courseCarouselItem.id,
              )}
            >
              <div className="PayNow">
                {isBought
                  ? getTranslatedText('learn_now')
                  : getTranslatedText('see_detail')}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;
