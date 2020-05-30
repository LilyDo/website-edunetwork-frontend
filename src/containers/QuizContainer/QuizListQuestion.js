// Usage: This container to display list question
//        of quiz
//----------//
// Import component: QuizQuestion

import React, {useEffect} from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import './QuizListQuestion.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
  getQuizAction
} from '../../actions/quiz';

const QuizListQuestionContainer = (props) => {

  const {actions, data} = props;
  useEffect(() => {
    actions.getQuizAction({token: localStorage.getItem("token"), lang: "vi"});
  }, []);

  return (
    <React.Fragment>
      <div class='question_container'>
        <Breadcrumb />
        <QuizHeader clock={true} />
      <div className='list_container'>
        {data.questions.map((item, index) => (
          <QuizQuestion key={index} number={index} question={item} />
        ))}
      </div>
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