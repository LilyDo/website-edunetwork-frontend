// Usage: This start screen of quiz

import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { routes } from '../../constants';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';

import './QuizStartScreen.scss';
import { getTranslatedText } from '../../services/appService';

const QuizStartScreen = () => {

  return (
    <React.Fragment>
      <Breadcrumb
        data={[
          {link: routes.home, text: getTranslatedText('home')},
          {link: routes.quiz.main, text: getTranslatedText('quiz')}
        ]}
      />
      <div className='start_screen_container'>
        <QuizHeader />
        <div className='start_screen_content'>
          <Link to={routes.quiz.exam}>
          <button
            className='screen_btn'
          >
            <img src={require('../../assets/images/start_icon.png')} />
            BẮT ĐẦU THI
          </button>
          </Link>
          <p>Thời gian diễn ra chương trình:  từ 25/05/2020 - 25/06/2020</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizStartScreen;