import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

function CoursePage() {
  return (
    <div>
      <Breadcrumb />
      <QuoteContainer />
      <CourseCarouselContainer />
    </div>
  );
}

export default CoursePage;
