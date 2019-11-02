import React, { Component } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';

import './CourseLevel.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';
import StudentIcon from '../../assets/images/icon_student.svg';
import { routes } from '../../constants';
class CourseLevel extends Component {
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
                <div className="Text">Level</div>
                <div className="Level">{courseDetail.level}</div>
              </div>
              <div className="PriceContainer">
                <div className="Text">Price</div>
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
                <Link
                  to={routes.courseOrder.replace(
                    ':id',
                    courseDetail.id,
                  )}
                >
                  <div className="PayButton">THANH TOÁN NGAY</div>
                </Link>
              )}
              <div className="Include">
                Khóa học này bao gồm:
                <div className="Quantity">
                  Combo {get(courseDetail, 'child', []).length} khóa
                  học online{' '}
                </div>
              </div>
            </div>
            <div className="Info">
              <div className="Container">
                <img alt="time" src={TimeIcon}></img>
                <div className="Text">
                  Thời lượng:{' '}
                  <span>{courseDetail.duration} phút</span>
                </div>
              </div>
              <div className="Container">
                <img alt="book" src={BookIcon}></img>
                <div className="Text">
                  Giáo trình:{' '}
                  <span>{courseDetail.total_lesson} bài giảng</span>
                </div>
              </div>
              <div className="Container">
                <img alt="own" src={OwnerIcon}></img>
                <div className="Text">Sở hữu khóa học trọn đời</div>
              </div>
              <div className="Container">
                <img alt="student" src={StudentIcon}></img>
                <div className="Text">
                  <span>{courseDetail.attendees}</span> học viên
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseLevel;
