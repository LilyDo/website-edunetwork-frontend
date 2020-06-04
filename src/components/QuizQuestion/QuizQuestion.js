// Usage: This component is used display a question

import React, { useEffect, useState } from 'react';
import { Row, Col, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './QuizQuestion.scss';
// import Checkbox from "antd/es/Checkbox";

const QuizQuestion = props => {
  const { question, number, setQuestionRight } = props;

  useEffect(() => {
    if(typeof(question.image) === 'string') {
      console.log(question)
    }
  }, []);

  const checkingValue = e => {
    if (e.checked) {
      if (e.value == question.answer_right) setQuestionRight('right');
      else setQuestionRight('wrong');

      let elements = document.getElementsByName(
        'answer_' + question.id,
      );
      elements.forEach((item, index) => {
        item.disabled = true;
      });
    }

    // if (right === true)
  };

  return (
    <React.Fragment>
      {number % 2 !== 0 ? (
        <div
          style={{ backgroundColor: '#F7F7F7' }}
          className="question_container"
        >
          <p>
            {parseInt(number) + 1}. {question.question}
          </p>
          {typeof(question.image) === 'string' ? (
            console.log('hello'),
            <img src={question.image}/>

          ) : (
            <React.Fragment></React.Fragment>
          )}
          <div>
            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_A}
                  >
                    A
                  </Checkbox>
                  <p>{question.answer_A}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_B}
                  >
                    B
                  </Checkbox>
                  <p>{question.answer_B}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_C}
                  >
                    C
                  </Checkbox>
                  <p>{question.answer_C}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_D}
                  >
                    D
                  </Checkbox>
                  <p>{question.answer_D}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div className="question_container">
          <p>
            {parseInt(number) + 1}. {question.question}
          </p>
          {typeof(question.image) === 'string' ? (
            console.log('hello'),
            <img src={question.image} alt=""/>
          ): (
            <React.Fragment></React.Fragment>
          )}
          <div>
            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_A}
                  >
                    A
                  </Checkbox>
                  <p>{question.answer_A}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_B}
                  >
                    B
                  </Checkbox>
                  <p>{question.answer_B}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_C}
                  >
                    C
                  </Checkbox>
                  <p>{question.answer_C}</p>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="answer_container">
                  <Checkbox
                    name={'answer_' + question.id}
                    onChange={e => checkingValue(e.target)}
                    value={question.answer_D}
                  >
                    D
                  </Checkbox>
                  <p>{question.answer_D}</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default QuizQuestion;
