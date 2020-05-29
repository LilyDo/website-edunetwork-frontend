import React from 'react';
import './QuizHeader.scss';


const QuizHeader = () => {

  return (
    <React.Fragment>
      <div className='quiz_header_container'>
          <div className='left_container'>
            ĐỀ THI
            TRẮC NGHIỆM
          </div>
          <div className='mid_container'>
            <p>Level</p>
            <p className='mid_container_footer'>Master</p>
          </div>
          <div className='right_container'>
            <p>Thời gian làm bài</p>
            <div className='right_container_time'>
              <img className='time_icon' src={require('../../assets/images/clock_icon.png')} />
              <p className='time_content'>15</p>
              <p className='time_unit'>phút</p>
            </div>
          </div>
          {/* <div className='right_container'>
            <div className='right_container_header'>
              <p>phút</p>
              <p>giây</p>
            </div>
            <div className='right_container_time_timer'>
              <p>14</p>
              <div className='vertical_line'></div>
              <p>59</p>
            </div>
          </div> */}
      </div>
    </React.Fragment>
  );
};

export default QuizHeader;