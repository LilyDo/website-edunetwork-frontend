import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './AccountCoursePage.scss';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import CourseCard from '../CourseCard/CourseCard';
import { getCourseAction } from '../../actions/courses';

class AccountCoursePage extends Component {
  componentWillMount() {
    this.props.actions.getCourseAction();
  }

  render() {
    const { courses } = this.props.courses;
    return (
      <div>
        <AccountBreadcrumb />

        <div className="AvailableCourses">
          <div className="Description">Khóa học bổ sung cho bạn</div>
          <div className="CoursesContainer">
            {courses.map((course, index) => (
              <CourseCard courseCarouselItem={course} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({ getCourseAction }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountCoursePage);
