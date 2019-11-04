import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';
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
      <CourseCardContainer />
    </div>
  );
}

export default CoursePage;
