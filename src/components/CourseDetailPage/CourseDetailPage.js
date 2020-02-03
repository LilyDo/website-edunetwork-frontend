import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { get } from 'lodash';

import './CourseDetailPage.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CourseLevel from '../CourseLevel/CourseLevel';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';
import {
  getUserCoursesAction,
  getCourseDetailAction,
  getUserCourseDetailAction,
} from '../../actions/courses';
import {
  getTranslatedText,
  getUserFormLocal,
} from '../../services/appService';
import { routes } from '../../constants';

class CourseDetailPage extends Component {
  state = {
    currentId: '',
    newId: '',
  };

  componentDidMount() {
    this.props.actions.getUserCoursesAction();
  }

  componentWillReceiveProps(nextProps) {
    const newId = parseInt(get(nextProps, 'match.params.id'), 0);
    const courseDetail = get(this, 'props.courseDetail', {});
    const currentId = parseInt(get(courseDetail, 'id', 0));
    const loading = get(this, 'props.loading');

    this.setState({
      currentId: currentId,
      newId: newId,
    });

    if (
      newId > 0 &&
      !loading &&
      (Object.keys(courseDetail).length === 0 || newId !== currentId)
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
    const { currentId, newId } = this.state;

    return (
      <div className="CourseDetailPage">
        <Breadcrumb
          data={[
            { link: routes.home, text: getTranslatedText('HOME') },
            {
              link: routes.courses,
              text: getTranslatedText('COURSE'),
            },
            {
              link: routes.courseDetail.replace(
                ':id',
                courseDetail.id,
              ),
              text: getTranslatedText('DETAIL'),
            },
          ]}
        />
        <div className="CourseInfoLevelContainer">
          <CourseInfo
            courseDetail={courseDetail}
            isNewId={newId !== currentId}
          />
          <CourseLevel
            courseDetail={courseDetail}
            userCourses={userCourses}
          />
        </div>
        <CourseCardContainer excludeId={courseDetail.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courseDetail: get(state, 'courses.courseDetail', {}),
    userCourses: get(state, 'courses.userCourses', []),
    loading: get(state, 'courses.loading', false),
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
