// Usage: This container to display list question
//        of quiz
//----------//
// Import component: QuizQuestion

import React, {useEffect} from 'react';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import './QuizListQuestion.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
  getQuizAction
} from '../../actions/quiz';

// const data = [1,2,3,4,5,6,7,8,9,10];

const QuizListQuestionContainer = (props) => {

  const {actions, data} = props;
  useEffect(() => {
    actions.getQuizAction({token: localStorage.getItem("token"), lang: "vi"});
  }, []);

  return (
    <React.Fragment>
      <div className='list_container'>
        {data.questions.map((item, index) => (
          <QuizQuestion key={index} number={index} question={item} />
        ))}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.quiz.data || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getQuizAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizListQuestionContainer);