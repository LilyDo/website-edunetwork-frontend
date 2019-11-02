import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter } from 'lodash';

import './AccountCoursePage.scss';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import CourseCard from '../CourseCard/CourseCard';
import {
  getCourseAction,
  getUserCoursesAction,
  buyCourseAction,
} from '../../actions/courses';

class AccountCoursePage extends Component {
  componentWillMount() {
    this.props.actions.getCourseAction();
    this.props.actions.getUserCoursesAction();
  }

  onPayClick = course => {
    this.props.actions.buyCourseAction(course.id);
  };

  render() {
    const {
      courses,
      userCourses: { buy = [] },
    } = this.props.courses;
    const boughtCourseIds = buy.map(bought => bought.id);
    const unboughtCourses = filter(
      courses,
      course => !boughtCourseIds.includes(course.id),
    );

    return (
      <div>
        <AccountBreadcrumb />

        <div className="CourseBlock">
          <div className="CourseName">Khóa học của bạn</div>
          <div className="CoursesContainer">
            {buy.map((course, index) => (
              <CourseCard
                courseCarouselItem={course}
                onPayClick={this.onPayClick}
                key={index}
              />
            ))}
          </div>
        </div>

        {unboughtCourses.length > 0 && (
          <div className="CourseBlock">
            <div className="CourseName">Khóa học bổ sung cho bạn</div>
            <div className="CoursesContainer">
              {unboughtCourses.map((course, index) => (
                <CourseCard
                  courseCarouselItem={course}
                  onPayClick={this.onPayClick}
                  key={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
    userCourses: state.userCourses,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      { getCourseAction, getUserCoursesAction, buyCourseAction },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountCoursePage);
