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
} from '../../actions/courses';

class CourseDetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.getCourseDetailAction(id);
    this.props.actions.getUserCoursesAction();
  }

  componentWillReceiveProps(nextProps) {
    const newId = get(nextProps, 'match.params.id');
    const currentId = get(this, 'props.match.params.id');
    if (newId && currentId && newId !== currentId) {
      this.props.actions.getCourseDetailAction(newId);
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
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getUserCoursesAction,
        getCourseDetailAction,
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
