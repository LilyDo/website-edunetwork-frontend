import React from 'react';
import { Layout, Row, Col, Button, Typography } from 'antd';
import 'antd/dist/antd.css';

import PropTypes from 'prop-types';

import { getTranslatedText } from '../../services/appService';

const QuizModal = (props) => {

  const {
    renderType,
  } = props;

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
                    Bạn trả lời chưa hết các câu hỏi của chúng tôi.
                    Bạn cần trả lời hết 30 câu hỏi để xem kết quả.
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
                      {/* {getTranslatedText(
                        'result_modal_next_round_button',
                      )} */}
                      XEM LẠI BẢNG CÂU HỎI
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                  // onClick={() => handleAddMoneyToWallet()}
                  >
                    HỦY BỎ
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
                    Bạn đã hết 15 phút thời gian làm bài.
                    Bạn có muốn thi lại không?
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
                      OK, TÔI THI LẠI
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                  // onClick={() => handleAddMoneyToWallet()}
                  >
                    TÔI KHÔNG MUỐN THI NỮA
                  </Button>
                </Col>
              </Row>
            </Layout.Footer>
          </React.Fragment>
        )
      
      case 'overTurn':
        return (
          <React.Fragment>
            <Layout.Content className="content__container">
              <Row>
                <Col span={16}>
                  <Typography.Text className="container___text">
                    Bạn đã tham gia thi trắc nghiệm 2 lần trong ngày hôm nay rồi.
                    Nếu bạn chưa đạt đủ số điểm thi trắc nghiệm và muốn thi lại, hãy tham gia trở lại vào ngày mai hoặc ngày khác nhé!
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
                      OK, TÔI SẼ THAM GIA VÀO NGÀY KHÁC
                    </Typography.Text>
                  </Button>
                </Col>
                <Col span={12} xs={24} xl={12}>
                  <Button
                    className="modal__button"
                  // onClick={() => handleAddMoneyToWallet()}
                  >
                    TÔI KHÔNG MUỐN THI NỮA
                  </Button>
                </Col>
              </Row>
            </Layout.Footer>
          </React.Fragment>
        )
      default:
        return (
          <React.Fragment></React.Fragment>
        )
    };
  };

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
}

export default QuizModal;
