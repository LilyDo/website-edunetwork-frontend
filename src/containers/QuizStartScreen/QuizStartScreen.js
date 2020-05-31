// Usage: This start screen of quiz

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../constants';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

import './QuizStartScreen.scss';
import { getTranslatedText } from '../../services/appService';
import {bindActionCreators} from "redux";
import {getQuizAction} from "../../actions/quiz";
import {connect} from "react-redux";

const QuizStartScreen = (props) => {

  const {actions, data} = props;

  useEffect(() => {
    actions.getQuizAction({
      token: localStorage.getItem('token'),
      lang: 'vi',
    });
  }, []);

  const getQuiz = () => {
    if (data !== [])
      window.location.href = routes.quiz.exam;
  }

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
              BẮT ĐẦU THI
            </button>
          {/*</Link>*/}
          <p>
            Thời gian diễn ra chương trình: từ {data.start_date} - {data.end_date}
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
)(QuizStartScreen);
