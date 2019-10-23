import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import CourseLevel from '../CourseLevel/CourseLevel';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';

function CourseDetailPage() {
  return (
    <div>
      <Breadcrumb />
      <CourseLevel />
      <CourseInfo />
      <CourseCarouselContainer />
    </div>
  );
}

export default CourseDetailPage;
