// Usage: This component to display how many question which
//  user answer

import React from 'react';
import './QuizReportCard.scss';

const QuizReportQuestionCard = (props) => {

  const {
    answer,
  } = props;

  return (
    <React.Fragment>
      <div className="card_container">
        <h1 className="card_header">{answer}</h1>
        <p className="card_content">TỔNG CÂU HỎI BẠN ĐÃ TRẢ LỜI</p>
      </div>
    </React.Fragment>
  );
};
export default QuizReportQuestionCard;
