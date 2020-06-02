// Usage: This container to display list question
//        of quiz
//----------//
// Import component: QuizQuestion

import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizHeader from '../../components/QuizHeader/QuizHeader';
import QuizQuestion from '../../components/QuizQuestion/QuizQuestion';

import './QuizListQuestion.scss';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getQuizAction } from '../../actions/quiz';
import { Modal, Row } from 'antd';
import 'antd/dist/antd.css';

import QuizModal from '../../components/QuizModal/QuizModal';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const QuizListQuestionContainer = props => {
  const {
    actions,
    data,
    isLoading,
  } = props;

  const [visible, setVisible] = useState(false);
  const [renderType, setRenderType] = useState(null);
  const [startCountdown, setStartCountdown] = useState(true);
  const [answer, setAnswer] = useState(0);
  const [right, setRight] = useState(0);

  const updateQuestionRight = async val => {
    if (val === 'right') setRight(right + 1);
    setAnswer(answer + 1);
  };

  const completeTheQuiz = () => {
    if (0 < answer && answer < 30) {
      setRenderType('notEnoughAnswer');
      setVisible(true);
    } else {
      let link = routes.quiz.result.replace(':answer', answer).replace(':right', right).replace(':target', data.max_question);
      window.location.href = link;
    }
  };

  useEffect(() => {
    actions.getQuizAction({
      token: localStorage.getItem('token'),
      lang: 'vi',
    });
    if (data.max_customer_turn === 2) {
      setRenderType('overTurn');
      setVisible(true);
    }
    ;
  }, []);

  return (
    <React.Fragment>
      <div class="question_list_container">
        <Breadcrumb
          data={[
            { link: routes.home, text: getTranslatedText('home') },
            {
              link: routes.quiz.main,
              text: getTranslatedText('quiz'),
            },
          ]}
        />
        <QuizHeader
          clock={true}
          startCountdown={startCountdown}
          setStartCountdown={setStartCountdown}
          isLoading={isLoading}
          setVisible={setVisible}
          setRenderType={setRenderType}
        />
        <div className="list_container">
          {data.questions.map((item, index) => (
            <QuizQuestion
              key={index}
              number={index}
              question={item}
              setQuestionRight={val => updateQuestionRight(val)}
            />
          ))}
        </div>
        <Modal
          visible={visible}
          footer={false}
          width="796px"
          onCancel={() => setVisible(false)}
          destroyOnClose={true}
        >
          <QuizModal
            renderType={renderType}
            setVisible={setVisible}
          />
        </Modal>

          <button className="yellow_light_btn" onClick={completeTheQuiz}>
            XEM KẾT QUẢ NGAY
          </button>
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
