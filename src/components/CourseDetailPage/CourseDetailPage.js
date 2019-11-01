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
import { getCourseDetailAction } from '../../actions/courses';

class CourseDetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actions.getCourseDetailAction(id);
  }

  componentWillReceiveProps(nextProps) {
    const newId = get(nextProps, 'match.params.id');
    const currentId = get(this, 'props.match.params.id');
    if (newId && currentId && newId != currentId) {
      this.props.actions.getCourseDetailAction(newId);
    }
  }

  render() {
    const { courseDetail = {} } = this.props;

    return (
      <div className="CourseDetailPage">
        <Breadcrumb />
        <div className="CourseInfoLevelContainer">
          <CourseInfo courseDetail={courseDetail} />
          <CourseLevel courseDetail={courseDetail} />
        </div>
        <CourseCarouselContainer excludeId={courseDetail.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courseDetail: state.courses.courseDetail,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
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
