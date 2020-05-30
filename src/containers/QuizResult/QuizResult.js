// Usage: This container to display result quiz of user
//Import component: QuizReportCard

import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import QuizReportCard from '../../components/QuizReportCard/QuizReportCard';

import './QuizResult.scss';


const QuizResultContainer = () => {

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className='result_container'>
        <p className='result_container_header'>KẾT QUẢ THI TRẮC NGHIỆM CỦA BẠN</p>
        <div className='result_container_body'>
          <p>Cảm ơn bạn đã tham gia phần thi trắc nghiệm của mình. Bên dưới là kết quả của bạn</p>
          <div className='body_content_card'>
            <QuizReportCard />
            <QuizReportCard />
          </div>
          <div className='body_footer'>
            <img src={require('../../assets/images/warn_icon.png')} />
            <p>Bạn cần phải đạt đủ 30 ĐIỂM để tham gia xếp hạng với các thành viên khác. 
            Bạn muốn thi lại không?</p>
          </div>
        </div>
        <div className='result_container_footer'>
          <button className='yellow_btn'>THI LẠI NGAY</button>
          <button className='grey_btn'>HỦY BỎ</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizResultContainer;