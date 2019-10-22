import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CourseLevel from '../CourseLevel/CourseLevel';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';
import LoginPopup from '../LoginPopup/LoginPopup';

function CourseDetail() {
  return (
    <div>
      <Breadcrumb />
      <CourseLevel />
      <CourseInfo />
      <CourseCarouselContainer />
      <LoginPopup />
    </div>
  );
}

export default CourseDetail;
