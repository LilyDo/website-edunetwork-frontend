import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { get } from 'lodash';

import './CourseDetailPage.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CourseLevel from '../CourseLevel/CourseLevel';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';
import {
  getUserCoursesAction,
  getCourseDetailAction,
  getUserCourseDetailAction,
} from '../../actions/courses';
import { getUserFormLocal } from '../../services/appService';

class CourseDetailPage extends Component {
  componentWillReceiveProps() {
    this.props.actions.getUserCoursesAction();
  }

  componentWillReceiveProps(nextProps) {
    const newId = get(nextProps, 'match.params.id');
    const currentId = get(this, 'props.match.params.id');
    const courseDetail = get(this, 'props.courseDetail');
    const loading = get(this, 'props.loading');
    if (
      (newId &&
        currentId &&
        !loading &&
        Object.keys(courseDetail).length === 0) ||
      newId !== currentId
    ) {
      if (getUserFormLocal()) {
        this.props.actions.getUserCourseDetailAction(newId);
      } else {
        this.props.actions.getCourseDetailAction(newId);
      }
    }
  }

  render() {
    const { courseDetail, userCourses } = this.props;

    return (
      <div className="CourseDetailPage">
        <Breadcrumb />
        <div className="CourseInfoLevelContainer">
          <CourseInfo courseDetail={courseDetail} />
          <CourseLevel
            courseDetail={courseDetail}
            userCourses={userCourses}
          />
        </div>
        <CourseCarouselContainer excludeId={courseDetail.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courseDetail: get(state, 'courses.courseDetail', {}),
    userCourses: get(state, 'courses.userCourses', []),
    loading: get(state, 'loading', false),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getUserCoursesAction,
        getCourseDetailAction,
        getUserCourseDetailAction,
      },
      dispatch,
    ),
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(CourseDetailPage);
