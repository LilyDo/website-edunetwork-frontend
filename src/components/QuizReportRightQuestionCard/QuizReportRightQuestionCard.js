// Usage: This component display number of right question

import React from 'react';
import './QuizReportRightQuestionCard.scss';

const QuizReportRightQuestionCard = (props) => {

  const {
    right,
    target
  } = props;

  return (
    <React.Fragment>
      <div className="card_right_container">
        <h1 className="card_right_header">{right}/{target}</h1>
        <p className="card_right_content">
          TỔNG SỐ ĐIỂM BẠN ĐẠT ĐƯỢC
        </p>
      </div>
    </React.Fragment>
  );
};

export default QuizReportRightQuestionCard;
