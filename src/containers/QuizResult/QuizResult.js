// Usage: This container to display result quiz of user
//Import component: QuizReportCard

import React, { useEffect } from 'react';

import { useRouteMatch, useParams, Link } from 'react-router-dom';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizReportQuestionCard from '../../components/QuizReportCard/QuizReportCard';
import QuizReportRightQuestionCard from '../../components/QuizReportRightQuestionCard/QuizReportRightQuestionCard';

import './QuizResult.scss';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';
import { bindActionCreators } from 'redux';
import { postResultQuizAction } from '../../actions/quiz';
import { connect } from 'react-redux';

const QuizResultContainer = props => {
  const { actions } = props;

  const match = useRouteMatch('/quiz/result/:answer/:right/:target');

  useEffect(() => {
    actions.postResultQuizAction({
      token: localStorage.getItem('token'),
      test_success: match.params.right >= match.params.target,
    });
  }, []);

  function renderBodyFooter(right) {
    if (right >= match.params.target) {
      return (
        <React.Fragment>
          <img
            src={require('../../assets/images/success_icon.png')}
          />
          <p>{getTranslatedText('quiz_result_success')}</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img src={require('../../assets/images/warn_icon.png')} />
          <p>
            {getTranslatedText('quiz_result_failure_1')}{' '}
            {match.params.target}{' '}
            {getTranslatedText('quiz_result_failure_2')}
          </p>
        </React.Fragment>
      );
    }
  }

  function renderResultButton(right) {
    if (right >= match.params.target) {
      return (
        <React.Fragment>
          <Link style={{ margin: 'auto' }} to={routes.quiz.rank}>
            <button className="yellow_result_btn">
              {getTranslatedText('btn_rank')}
            </button>
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Link to={routes.quiz.main}>
            <button className="yellow_btn">
              {getTranslatedText('btn_test_again')}
            </button>
          </Link>
          <Link to={routes.home}>
            <button className="grey_btn">
              {getTranslatedText('btn_cancel')}
            </button>
          </Link>
        </React.Fragment>
      );
    }
  }

  return (
    <React.Fragment>
      <Breadcrumb
        data={[
          { link: routes.home, text: getTranslatedText('home') },
          { link: routes.quiz.main, text: getTranslatedText('quiz') },
          {
            link: routes.quiz.result,
            text: getTranslatedText('result'),
          },
        ]}
      />
      <div className="result_container">
        <p className="result_container_header">
          {getTranslatedText('quiz_result')}
        </p>
        <div className="result_container_body">
          <p>{getTranslatedText('quiz_result_subheading')}</p>
          <div className="body_content_card">
            <QuizReportQuestionCard answer={match.params.answer} />
            <QuizReportRightQuestionCard
              right={match.params.right}
              target={match.params.target}
            />
          </div>
          <div className="body_footer">
            {renderBodyFooter(match.params.right)}
          </div>
        </div>
        <div className="result_container_footer">
          {renderResultButton(match.params.right)}
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.quiz.loading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        postResultQuizAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizResultContainer);
