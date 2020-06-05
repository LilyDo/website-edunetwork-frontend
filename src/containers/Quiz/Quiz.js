// Usage: This is main container of Quiz module
//----------------//
// Nested router
import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import QuizListQuestionContainer from '../QuizContainer/QuizListQuestion';
import QuizStartScreen from '../QuizStartScreen/QuizStartScreen';
import QuizResultContainer from '../QuizResult/QuizResult';
import QuizRank from '../../components/QuizRank/QuizRank';

const QuizContainer = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={match.url} component={QuizStartScreen} />
        <Route
          path={`${match.url}/test`}
          component={QuizListQuestionContainer}
        />
        <Route
          path={`${match.url}/result`}
          component={QuizResultContainer}
        />
        <Route path={`${match.url}/rank`} component={QuizRank} />
      </Switch>
    </React.Fragment>
  );
};

export default QuizContainer;
