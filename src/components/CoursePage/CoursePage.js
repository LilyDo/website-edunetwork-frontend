import React from 'react';
import QuoteContainer from '../QuoteContainer/QuoteContainer';
import CourseCardContainer from '../CourseCardContainer/CourseCardContainer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { routes } from '../../constants';
import {getTranslatedText} from "../../services/appService";

function CoursePage() {
  return (
    <div>
      <Breadcrumb
        data={[
          { link: routes.home, text: getTranslatedText('HOME') },
          { link: routes.courses, text: getTranslatedText('COURSE') },
        ]}
      />
      <QuoteContainer />
      <CourseCardContainer />
    </div>
  );
}

export default CoursePage;
