import React from 'react';
import {
  Layout,
  Row,
  Col,
  Button,
  Typography
} from 'antd';
import 'antd/dist/antd.css';

import { getTranslatedText } from '../../services/appService';

const QuizModal = () => {

  return (
    <React.Fragment>
      <Layout>
        <Layout.Header className="logo__container">
          <img src={require('../../assets/images/logo.svg')} />
        </Layout.Header>
        <Layout.Content className="content__container">
          <Row>
            <Col span={24}>
              <Typography.Text className="content_heading">
                {getTranslatedText('result_modal_heading')}
              </Typography.Text>
            </Col>
            <Col span={16}>
              <Typography.Text className="container___text">
                {getTranslatedText('result_modal_sub_heading')}
              </Typography.Text>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer className="footer__container">
          <Row gutter={16}>
            <Col span={12} xs={24} xl={12}>
              <Button
                className="modal__button"
                // onClick={() => handleNextRoundButton()}
              >
                <Typography.Text className="button_label">
                  {getTranslatedText(
                    'result_modal_next_round_button',
                  )}
                </Typography.Text>
              </Button>
            </Col>
            <Col span={12} xs={24} xl={12}>
              <Button
                className="modal__button"
                // onClick={() => handleAddMoneyToWallet()}
              >
                <Typography.Text className="button_label">
                  {getTranslatedText('button_add_money_to_wallet')}
                </Typography.Text>
              </Button>
            </Col>
          </Row>
        </Layout.Footer>
      </Layout>
    </React.Fragment>
  );
};

export default QuizModal;