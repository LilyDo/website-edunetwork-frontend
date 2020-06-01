// Usage: This component display info of quiz and coundown clock
//---Countdown clock------//
// State: startCountdown
// 1. startCountdown = true
// 2. Take time now from moment
// 3. timeNow + 15min = timetillEnd
// 4. Set interval to update clock

import React, { useState, useEffect } from 'react';
import './QuizHeader.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

const QuizHeader = props => {
  const {
    startCountdown,
    clock,
    isLoading,
    setStartCountdown,
    setVisible,
    setRenderType,
  } = props;

  const [minute, setMinute] = useState(null);
  const [second, setSecond] = useState(null);
  const user = JSON.parse(localStorage.getItem('current_user'));

  useEffect(() => {
    console.log(startCountdown);
    if (startCountdown === true && isLoading === false) {
      var now = moment.now();
      const timeTillEnd = now + 900000;
      var countdownClock = setInterval(() => {
        const countDown = moment(timeTillEnd - now);
        const mininute = countDown.format('mm');
        const second = countDown.format('ss');
        setMinute(mininute);
        setSecond(second);
        now = moment.now();
        if (countDown.format('mm:ss') === '00:00') {
          clearInterval(countdownClock);
          setStartCountdown(false);
          setRenderType('overTime');
          setVisible(true);
        }
      }, 1000);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="quiz_header_container">
        <div className="left_container">ĐỀ THI TRẮC NGHIỆM</div>
        <div className="mid_container">
          <p>Level</p>
          <p className="mid_container_footer">{user.level}</p>
        </div>
        {!clock ? (
          <div className="right_container">
            <p>Thời gian làm bài</p>
            <div className="right_container_time">
              <img
                className="time_icon"
                src={require('../../assets/images/clock_icon.png')}
              />
              <p className="time_content">15</p>
              <p className="time_unit">phút</p>
            </div>
          </div>
        ) : (
          <div className="right_container">
            <div className="right_container_header">
              <p>phút</p>
              <p>giây</p>
            </div>
            <div className="right_container_time_timer">
              <p>{minute}</p>
              <div className="vertical_line" />
              <p>{second}</p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

QuizHeader.propTypes = {
  clock: PropTypes.bool,
  startCountdown: PropTypes.bool,
  isLoading: PropTypes.bool,
  setStartCountdown: PropTypes.func,
  setVisible: PropTypes.func,
  setRenderType: PropTypes.func,
};

export default QuizHeader;
