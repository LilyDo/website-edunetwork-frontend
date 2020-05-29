// Usage: This is main container of Quiz module
//----------------//
// Nested router
import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import QuizListQuestionContainer from '../QuizContainer/QuizListQuestion';

const QuizContainer = () => {

  const match = useRouteMatch();

  return (
    <React.Fragment>
        <Breadcrumb />
        <QuizHeader />
      <Switch>
        <Route exact path={match.url} component={QuizListQuestionContainer} />
      </Switch>
    </React.Fragment>
  );
};

export default QuizContainer;