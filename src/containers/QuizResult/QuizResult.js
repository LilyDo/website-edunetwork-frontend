// Usage: This container to display result quiz of user
//Import component: QuizReportCard

import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizReportQuestionCard from '../../components/QuizReportCard/QuizReportCard';
import QuizReportRightQuestionCard from '../../components/QuizReportRightQuestionCard/QuizReportRightQuestionCard';

import './QuizResult.scss';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';
import {bindActionCreators} from "redux";
import {postResultQuizAction} from "../../actions/quiz";
import {connect} from "react-redux";

const QuizResultContainer = (props) => {
  const {actions} = props;
  // receive answer and right here and call postResultQuizAction
  // const { answer } = React.useContext(globalStateContext);
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
          KẾT QUẢ THI TRẮC NGHIỆM CỦA BẠN
        </p>
        <div className="result_container_body">
          <p>
            Cảm ơn bạn đã tham gia phần thi trắc nghiệm của mình. Bên
            dưới là kết quả của bạn
          </p>
          <div className="body_content_card">
            <QuizReportQuestionCard />
            <QuizReportRightQuestionCard />
          </div>
          <div className="body_footer">
            <img src={require('../../assets/images/warn_icon.png')} />
            <p>
              Bạn cần phải đạt đủ 30 ĐIỂM để tham gia xếp hạng với các
              thành viên khác. Bạn muốn thi lại không?
            </p>
          </div>
        </div>
        <div className="result_container_footer">
          <button className="yellow_btn">THI LẠI NGAY</button>
          <button className="grey_btn">HỦY BỎ</button>
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
