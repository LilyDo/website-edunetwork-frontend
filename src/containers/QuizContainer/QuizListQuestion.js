// Usage: This container to display list question
//        of quiz
//----------//
// Import component: QuizQuestion

import React, {useState, useEffect} from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import './QuizListQuestion.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {
  getQuizAction
} from '../../actions/quiz';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

import QuizModal from '../../components/QuizModal/QuizModal';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';

const QuizListQuestionContainer = (props) => {

  const {
    actions,
    data,
    isLoading,
  } = props;

  const [visible, setVisible] = useState(false);
  const [startCountdown, setStartCountdown] = useState(true);

  useEffect(() => {
    actions.getQuizAction({token: localStorage.getItem("token"), lang: "vi"});
  }, []);

  return (
    <React.Fragment>
      <div class='question_list_container'>
        <Breadcrumb
          data={[
            {link: routes.home, text: getTranslatedText('home')},
            {link: routes.quiz.main, text: getTranslatedText('quiz')}
          ]}
        />
        <QuizHeader
          clock={true}
          startCountdown={startCountdown}
          setStartCountdown={setStartCountdown}
          isLoading={isLoading}
        />
        <div className='list_container'>
          {data.questions.map((item, index) => (
            <QuizQuestion key={index} number={index} question={item} />
          ))}
        </div>
        <Modal
          visible={visible}
          footer={false}
          width='796px'
        >
            <QuizModal />
        </Modal>
        <button className='yellow_light_btn'>XEM KẾT QUẢ NGAY</button>
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
)(QuizListQuestionContainer);