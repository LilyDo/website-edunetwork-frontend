// Usage: This component display number of right question

import React from 'react';
import './QuizReportRightQuestionCard.scss';
import { getTranslatedText } from '../../services/appService';

const QuizReportRightQuestionCard = props => {
  const { right, target } = props;

  function renderTickIcon(right) {
    //If right === 30 => display tick icon on top-right of card
    if (right >= target) {
      return (
        <React.Fragment>
          <img
            class="card_badge"
            src={require('../../assets/images/tick_icon.png')}
          />
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  }

  return (
    <React.Fragment>
      <div className="card_right_container">
        <h1 className="card_right_header">
          {right}/{target}
        </h1>
        {renderTickIcon(right)}
        <p className="card_content">
          {getTranslatedText('quiz_score')}
        </p>
      </div>
    </React.Fragment>
  );
};

export default QuizReportRightQuestionCard;
