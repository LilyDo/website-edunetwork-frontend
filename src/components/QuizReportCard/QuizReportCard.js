// Usage: This component to display how many question which
//  user answer

import React from 'react';
import './QuizReportCard.scss';
import { getTranslatedText } from '../../services/appService';

const QuizReportQuestionCard = (props) => {

  const {
    answer,
  } = props;

  return (
    <React.Fragment>
      <div className="card_container">
        <h1 className="card_header">{answer}</h1>
        <p className="card_content">{getTranslatedText('quiz_answer')}</p>
      </div>
    </React.Fragment>
  );
};
export default QuizReportQuestionCard;
