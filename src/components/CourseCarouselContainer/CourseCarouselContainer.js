import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filter } from 'lodash';

import './CourseCarouselContainer.scss';
import CourseCarousel from '../Carousel/CourseCarousel';
import CourseBackground from '../../assets/images/course_background.png';
import CourseCard from '../CourseCard/CourseCard';
import { getCoursesAction } from '../../actions/courses';

class CourseCarouselContainer extends Component {
  componentWillMount() {
    this.props.actions.getCoursesAction();
  }

  render() {
    let {
      courses: { courses },
      excludeId,
    } = this.props;

    if (excludeId) {
      courses = filter(courses, course => course.id !== excludeId);
    }

    return (
      <div>
        <div className="CourseTitleContainer">
          <div className="CourseTitle">
            <div className="Title">CÁC KHÓA HỌC CỦA CHÚNG TÔI</div>
            <div className="Note">
              Lưu ý: Giá của khóa học đã bao gồm thuế phí, thành viên
              không phải mất thêm bất kì khoản chi phí nào.
            </div>
          </div>
        </div>

        <div className="CourseCarousel">
          <img
            className="CourseBackground"
            alt="course background"
            src={CourseBackground}
          ></img>
          <CourseCarousel title="CourseCarousel">
            {courses.map((courseCarouselItem, index) => (
              <CourseCard
                courseCarouselItem={courseCarouselItem}
                key={index}
              />
            ))}
          </CourseCarousel>
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
    actions: bindActionCreators(
      {
        getCoursesAction,
      },
      dispatch,
    ),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseCarouselContainer);
