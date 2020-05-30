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
import {Modal, Row} from 'antd';
import 'antd/dist/antd.css';

import QuizModal from '../../components/QuizModal/QuizModal';
import {toast} from "react-toastify";

const QuizListQuestionContainer = (props) => {

  const {actions, data} = props;

  const [visible, setVisible] = useState(false);

  let right = 0;

  const updateQuestionRight = async (val) => {
    if (val === "right")
      right += 1;

    console.log(right);
  };

  const viewResult = () => {
    toast.success("Bạn đã hoàn thành đúng " + right + " câu");
  }

  useEffect(() => {
    actions.getQuizAction({token: localStorage.getItem("token"), lang: "vi"});
  }, []);

  return (
    <React.Fragment>
      <div className='question_list_container'>
        <Breadcrumb />
        <QuizHeader clock={true} />
        <div className='list_container'>
          {data.questions.map((item, index) => (
            <QuizQuestion key={index} number={index} question={item} setQuestionRight={val => updateQuestionRight(val)} />
          ))}
        </div>
        <div className="list_container">
          <Row>
            <button onClick={() => viewResult()}>Xem kết quả</button>
          </Row>
        </div>
        <Modal
          visible={visible}
          footer={false}
          width='796px'
        >
            <QuizModal />
        </Modal>
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