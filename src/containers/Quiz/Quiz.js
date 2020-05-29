// Usage: This is main container of Quiz module
//----------------//
// Nested router
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

const QuizContainer = () => {

  return (
    <React.Fragment>
      <Breadcrumb />
    </React.Fragment>
  );
};

export default QuizContainer;