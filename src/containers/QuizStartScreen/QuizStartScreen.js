// Usage: This start screen of quiz

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

import './QuizStartScreen.scss';
import { getTranslatedText } from '../../services/appService';
import { bindActionCreators } from 'redux';
import { getPermissionQuizAction, getTimeEventQuizAction } from '../../actions/quiz';
import { connect } from 'react-redux';

const QuizStartScreen = props => {
  const { actions, data, canContinue, time_event } = props;

  useEffect(() => {
    actions.getPermissionQuizAction({
      token: localStorage.getItem('token')
    });
    actions.getTimeEventQuizAction();
  }, []);

  const getQuiz = () => {
    // console.log(canContinue);
    if (canContinue) window.location.href = routes.quiz.exam;
  };

  return (
    <React.Fragment>
      <Breadcrumb
        data={[
          { link: routes.home, text: getTranslatedText('home') },
          { link: routes.quiz.main, text: getTranslatedText('quiz') },
        ]}
      />
      <div className="start_screen_container">
        <QuizHeader />
        <div className="start_screen_content">
          {/*<Link to={routes.quiz.exam}>*/}
          <button className="screen_btn" onClick={getQuiz}>
            <img
              src={require('../../assets/images/start_icon.png')}
            />
            {getTranslatedText('start_quiz')}
          </button>
          {/*</Link>*/}
          <p>
            {getTranslatedText('quiz_during_time')} {getTranslatedText('quiz_time_from')} {time_event.start} - {' '}
            {time_event.end}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    data: state.quiz.data || [],
    isLoading: state.quiz.loading,
    canContinue: state.quiz.canContinue || 0,
    time_event: state.quiz.time_event,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getPermissionQuizAction,
        getTimeEventQuizAction
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizStartScreen);
