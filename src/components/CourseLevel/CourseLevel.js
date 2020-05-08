import React, { Component } from 'react';
import {
  Popover, Row, Col,
} from 'antd';
import 'antd/dist/antd.css';
import { get } from 'lodash';

import './CourseLevel.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';
import StudentIcon from '../../assets/images/icon_student.svg';
import { routes } from '../../constants';
import {
  getTranslatedText,
  getUserFormLocal,
} from '../../services/appService';
import { formatDurationText } from '../../services/appService';

class CourseLevel extends Component {

  onPayClick = () => {
    const url = getUserFormLocal()
      ? routes.courseOrder.replace(':id', this.props.courseDetail.id)
      : routes.signin;
    window.location.pathname = url;
  };

  render() {
    const { courseDetail, userCourses } = this.props;
    const isCourseBought = !!get(userCourses, 'buy', []).find(
      boughtCourse => boughtCourse.id === courseDetail.id,
    );

    return (
      <div className="CourseLevelComponentContainer">
        <div className="CourseName">{courseDetail.title}</div>
        <div className="CourseLevelContainer">
          <div className="CourseLevel">
            <div className="Level_PriceContainer">
              <div className="LevelContainer">
                <div className="Text">
                  {getTranslatedText('level')}
                </div>
                <div className="Level">{courseDetail.level}</div>
              </div>
              <div className="PriceContainer">
                <div className="Text">
                  {getTranslatedText('price')}
                </div>
                <div className="NumberContainer">
                  <div className="PriceNumber">
                    <span>{courseDetail.price}</span>
                    <sup>USD</sup>
                  </div>
                </div>
              </div>
            </div>
            <div className="PayNow">
              {!isCourseBought && (
                  <div className="PayButton" onClick={this.onPayClick}>
                    {getTranslatedText('purchase_now')}
                  </div>
              )}
              <div className="Include">
                {getTranslatedText('course_include')}:
                <div className="Quantity">
                  {getTranslatedText('combo')}{' '}
                  {courseDetail.total_course}{' '}
                  {getTranslatedText('course')}
                </div>
              </div>
            </div>
            <div className="Info">
              <div className="Container">
                <img alt="time" src={TimeIcon}></img>
                <div className="Text">
                  {getTranslatedText('duration')}{' '}
                  <span>
                    {formatDurationText(courseDetail.duration)}
                  </span>
                </div>
              </div>
              <div className="Container">
                <img alt="book" src={BookIcon}></img>
                <div className="Text">
                  {getTranslatedText('content')}:{' '}
                  <span>{courseDetail.total_lesson} videos</span>
                </div>
              </div>
              <div className="Container">
                <img alt="own" src={OwnerIcon}></img>
                <div className="Text">
                  {getTranslatedText('lifetime')}
                </div>
              </div>
              {/*<div className="Container">*/}
              {/*  <img alt="student" src={StudentIcon}></img>*/}
              {/*  <div className="Text">*/}
              {/*    <span>{courseDetail.attendees}</span>{' '}*/}
              {/*    {getTranslatedText('member')}*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseLevel;
