// Usage: This component is used display a question

import React from 'react';
import {
  Row,
  Col,
  Checkbox,
} from 'antd';
import 'antd/dist/antd.css';
import './QuizQuestion.scss';

const QuizQuestion = (props) => {

  const {question, number} = props;

  return (
    <React.Fragment>
      <div className='question_container'>
        <p>{parseInt(number) + 1}. {question.question}</p>
        <div>
          <Row gutter={16}>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='A'>A</Checkbox>
                <p>{question.answer_A}</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'> 
                <Checkbox value='B'>B</Checkbox>
                <p>{question.answer_B}</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='C'>C</Checkbox>
                <p>{question.answer_C}</p>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className='answer_container'>
                <Checkbox value='D'>D</Checkbox>
                <p>{question.answer_D}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuizQuestion;