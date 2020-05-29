// Usage: This component is used display a question

import React from 'react';
import {
  Row,
  Col,
  Checkbox,
} from 'antd';
import 'antd/dist/antd.css';
import './QuizQuestion.scss';

const QuizQuestion = () => {

  return (
    <React.Fragment>
      <div className='question_container'>
        <p>1. Công ty Edunetork tên đầy đủ là gì?</p>
        <div>
          <Row gutter={16}>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='A'>A</Checkbox>
                <p>Edunetork Global Plc</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'> 
                <Checkbox value='A'>A</Checkbox>
                <p>Edunetork Global Plc</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='A'>A</Checkbox>
                <p>Edunetork Global Plc</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='A'>A</Checkbox>
                <p>Edunetork Global Plc</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizQuestion;