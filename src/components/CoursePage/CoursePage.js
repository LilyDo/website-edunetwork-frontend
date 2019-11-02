import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCarouselContainer from '../CourseCarouselContainer/CourseCarouselContainer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { routes } from '../../constants';

function CoursePage() {
  return (
    <div>
      <Breadcrumb
        data={[
          { link: routes.home, text: 'HOME' },
          { link: routes.courses, text: 'COURSES' },
        ]}
      />
      <QuoteContainer />
      <CourseCarouselContainer />
    </div>
  );
}

export default CoursePage;
