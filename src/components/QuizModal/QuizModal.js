import React from 'react';
import { Layout, Row, Col, Button, Typography } from 'antd';
import 'antd/dist/antd.css';

import PropTypes from 'prop-types';

import { getTranslatedText } from '../../services/appService';
import { routes } from '../../constants';

const QuizModal = props => {
  const { renderType, setVisible } = props;

  function renderModalContentAndFooter(renderType) {
    switch (renderType) {
      case 'notEnoughAnswer':
        return (
          <React.Fragment>
            <Layout.Content className="content__container">
              <Row>
                <Col span={16}>
                  <Typography.Text className="container___text">
                    {/* {getTranslatedText('result_modal_sub_heading')} */}
                    {getTranslatedText('quiz_not_enough_answer')}
                  </Typography.Text>
                </Col>
              </Row>
            </Layout.Content>
            <Layout.Footer className="footer__container">
              <Row gutter={16}>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => setVisible(false)}
                  >
                    <Typography.Text className="button_label">
                      {/* {getTranslatedText(
                        'result_modal_next_round_button',
                      )} */}
                      {getTranslatedText('btn_watch_question_again')}
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => {
                      setVisible(false);
                      window.location.href = routes.quiz.main;
                    }}
                  >
                    {getTranslatedText('btn_cancel')}
                  </Button>
                </Col>
              </Row>
            </Layout.Footer>
          </React.Fragment>
        );
      case 'overTime':
        return (
          <React.Fragment>
            <Layout.Content className="content__container">
              <Row>
                <Col span={16}>
                  <Typography.Text className="container___text">
                    {getTranslatedText('quiz_over_time')}
                  </Typography.Text>
                </Col>
              </Row>
            </Layout.Content>
            <Layout.Footer className="footer__container">
              <Row gutter={16}>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => {
                      setVisible(false);
                      window.location.href = routes.quiz.exam;
                    }}
                  >
                    <Typography.Text className="button_label">
                      {getTranslatedText('btn_test_again')}
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => {
                      setVisible(false);
                      window.location.href = routes.quiz.main;
                    }}
                  >
                    {getTranslatedText('btn_cancel_test')}
                  </Button>
                </Col>
              </Row>
            </Layout.Footer>
          </React.Fragment>
        );

      case 'overTurn':
        return (
          <React.Fragment>
            <Layout.Content className="content__container">
              <Row>
                <Col span={16}>
                  <Typography.Text className="container___text">
                    {getTranslatedText('quiz_over_turn')}
                  </Typography.Text>
                </Col>
              </Row>
            </Layout.Content>
            <Layout.Footer className="footer__container">
              <Row gutter={16}>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => {
                      setVisible(false);
                      window.location.href = routes.home;
                    }}
                  >
                    <Typography.Text className="button_label">
                      {getTranslatedText('btn_test_another_day')}
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                    onClick={() => {
                      setVisible(false);
                      window.location.href = routes.home;
                    }}
                  >
                    {getTranslatedText('btn_cancel_test')}
                  </Button>
                </Col>
              </Row>
            </Layout.Footer>
          </React.Fragment>
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  }

  return (
    <React.Fragment>
      <Layout>
        <Layout.Header className="logo__container">
          <img src={require('../../assets/images/logo.svg')} />
        </Layout.Header>
        <p>THÔNG BÁO</p>
        {renderModalContentAndFooter(renderType)}
      </Layout>
    </React.Fragment>
  );
};

QuizModal.propTypes = {
  renderType: PropTypes.string,
  setVisible: PropTypes.func,
};

export default QuizModal;
