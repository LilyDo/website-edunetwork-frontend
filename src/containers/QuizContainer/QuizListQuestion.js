// Usage: This container to display list question
//        of quiz
//----------//
// Import component: QuizQuestion

import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import './QuizListQuestion.scss';

const data = [1,2,3,4,5,6,7,8,9,10];

const QuizListQuestionContainer = () => {

  return (
    <React.Fragment>
      <div class='question_container'>
        <Breadcrumb />
        <QuizHeader clock={true} />
        <div className='list_container'>
          {data.map((item, index) => (
            <div className='list_item'>
              <QuizQuestion />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizListQuestionContainer;