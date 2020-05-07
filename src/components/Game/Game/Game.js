import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Typography,
  Layout,
  Tag,
  Modal,
} from 'antd';
import 'antd/dist/antd.css';
import '../Game/Game.scss';
import { getTranslatedText } from '../../../services/appService';
import { routes } from '../../../constants';
import {
  rollingGame,
  addMoneyToWallet,
  getRollAmount,
  getRatioWheelOption,
  getEventTime,
} from '../../../services/appService';

function Wheel(props) {
  const {
    setResultGameModalVisible,
    setGivenResult,
    listOptionWheel,
    setTotalBonus,
    setRollAmountLeft,
    rollAmountLeft,
  } = props;

  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState('');

  useEffect(() => {
    if (selectedItem !== null) {
      setSpinning('spinning');
      setTimeout(() => {
        setSelectedItem(null);
        setSpinning('');
      }, 4000);
    }
  }, [selectedItem]);

  const selectItem = async () => {
    if (rollAmountLeft === 0) {
      alert(getTranslatedText('end_of_roll'));
    } else {
      rollingGame()
        .then(response => {
          if (response.statusCode === 403) {
            alert(getTranslatedText('end_of_roll'));
          } else {
            const givenResult = response.data.data.result;
            const givenSelectItem = listOptionWheel.indexOf(
              givenResult,
            );
            setSelectedItem(givenSelectItem);
            setRollAmountLeft(response.data.data.number);
            setTimeout(() => {
              setGivenResult(givenResult);
              setResultGameModalVisible(true);
              setTotalBonus(response.data.data.money);
            }, 4000);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const wheelVars = {
    '--nb-item': listOptionWheel.length,
    '--selected-item': selectedItem,
  };

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${spinning}`}
        style={wheelVars}
        onClick={() => selectItem()}
      >
        {listOptionWheel.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ '--item-nb': index }}
          >
            ${item}
          </div>
        ))}
      </div>
    </div>
  );
}

const ResultWheelModal = props => {
  const {
    givenResult,
    setResultGameModalVisible,
    setAddMoneyToWaletModalVisible,
    setTotalMoneyAdded,
  } = props;

  const handleNextRoundButton = () => {
    setResultGameModalVisible(false);
  };

  const handleAddMoneyToWallet = () => {
    addMoneyToWallet()
      .then(response => {
        setTotalMoneyAdded(response.data.data.total);
        setAddMoneyToWaletModalVisible(true);
        setResultGameModalVisible(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Layout>
        <Layout.Header className="logo__container">
          <img src={require('../../../assets/images/logo.svg')} />
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
            <Col span={8}>
              <Tag color="#FAC857" className="tag__info">
                {givenResult}$
              </Tag>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer className="footer__container">
          <Row gutter={16}>
            <Col span={12} xs={24} xl={12}>
              <Button
                className="modal__button"
                onClick={() => handleNextRoundButton()}
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
                onClick={() => handleAddMoneyToWallet()}
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

const AddMoneyToWallet = props => {
  const {
    setAddMoneyToWaletModalVisible,
    totalBonus,
    totalMoneyAdded,
  } = props;

  const handleCheckWalletButton = () => {
    setAddMoneyToWaletModalVisible(false);
  };

  return (
    <React.Fragment>
      <Layout>
        <Layout.Header className="logo__container">
          <img src={require('../../../assets/images/logo.svg')} />
        </Layout.Header>
        <Layout.Content className="content__container">
          <Row>
            <Col span={24}>
              <Typography.Text className="content_heading">
                {getTranslatedText('add_money_success')}
              </Typography.Text>
            </Col>
            <Col span={16}>
              <Typography.Text className="container___text">
                {getTranslatedText('add_money_content')}
              </Typography.Text>
            </Col>
            <Col span={8}>
              <Typography.Text className="container___text">
                {getTranslatedText('current_money_add')}
              </Typography.Text>
              <Tag color="#FAC857" className="tag__info">
                {totalBonus} $
              </Tag>
              <Typography.Text className="container___text">
                {getTranslatedText('total_money_added')}
              </Typography.Text>
              <Tag color="#FAC857" className="tag__info">
                {totalMoneyAdded} $
              </Tag>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer className="footer__container">
          <Row>
            <Col span={24}>
              <Link to={routes.accountWallet}>
                <Button
                  className="button"
                  onClick={() => handleCheckWalletButton()}
                >
                  <Typography.Text className="button_label">
                    {getTranslatedText('button_check_wallet')}
                  </Typography.Text>
                </Button>
              </Link>
            </Col>
          </Row>
        </Layout.Footer>
      </Layout>
    </React.Fragment>
  );
};

// render status number of turn
const TurnStatusTag = props => {
  const { rollAmountLeft } = props;

  return (
    <React.Fragment>
      <Typography.Text strong className="container___text">
        {getTranslatedText('roll_amount_left')}
      </Typography.Text>
      <Tag className="tag__info" color="#FAC857">
        {rollAmountLeft} {getTranslatedText('game_turn')}
      </Tag>
    </React.Fragment>
  );
};

const Game = () => {
  const [
    resultGameModalVisible,
    setResultGameModalVisible,
  ] = useState(false);
  const [
    addMoneyToWalletModalVisible,
    setAddMoneyToWaletModalVisible,
  ] = useState(false);
  const [rollAmountLeft, setRollAmountLeft] = useState([]);
  const [givenResult, setGivenResult] = useState(null);
  const [totalBonus, setTotalBonus] = useState(0);
  const [listOptionWheel, setListOptionWheel] = useState([]);
  const [totalMoneyAdded, setTotalMoneyAdded] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // render component Game, request list option cho con quay
  useEffect(() => {
    getRatioWheelOption()
      .then(response => {
        setListOptionWheel(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  // get data time of event to display to screen
  useEffect(() => {
    getEventTime()
      .then(response => {
        setStartDate(response.startDate);
        setEndDate(response.endDate);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  // Lay tong so roll cua nguoi dung
  useEffect(() => {
    getRollAmount()
      .then(response => {
        setRollAmountLeft(response.rollAmountLeft);
        setTotalBonus(response.currentLastTotalBonus);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  // reset total bonus after add money to wallet success
  useEffect(() => {
    if (addMoneyToWalletModalVisible === false) {
      setTotalBonus(0);
    }
  }, [addMoneyToWalletModalVisible]);

  const handleAddMoneyToWallet = () => {
    addMoneyToWallet()
      .then(response => {
        setTotalMoneyAdded(response.data.data.total);
        setAddMoneyToWaletModalVisible(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Row justify="space-around">
        <Col
          // span={4}
          lg={4}
          xl={4}
          md={4}
          xs={4}
          className="game_turn_container"
        >
          <TurnStatusTag rollAmountLeft={rollAmountLeft} />
        </Col>
        <Col
          // span={6}
          lg={6}
          xl={6}
          md={6}
          xs={12}
        >
          <Wheel
            setResultGameModalVisible={setResultGameModalVisible}
            setGivenResult={setGivenResult}
            listOptionWheel={listOptionWheel}
            setTotalBonus={setTotalBonus}
            setRollAmountLeft={setRollAmountLeft}
            rollAmountLeft={rollAmountLeft}
          />
        </Col>
        <Col
          lg={6}
          xl={6}
          md={6}
          xs={24}
          className="col_event_container"
        >
          <Layout className="event_info__container">
            <Layout.Content className="event_container_body">
              <Row justify="space-between">
                <Col className="event__container_text" span={24}>
                  {getTranslatedText('time_event_title')}
                  <br />
                  {startDate}-{endDate}
                </Col>
                <Col
                  lg={24}
                  xl={24}
                  md={24}
                  xs={12}
                  className="col__container"
                >
                  <Typography.Text
                    strong
                    className="container___text"
                  >
                    {getTranslatedText('current_result_text')}
                  </Typography.Text>
                  {givenResult ? (
                    <Tag className="tag__info" color="#FAC857">
                      {givenResult} $
                    </Tag>
                  ) : (
                    <Tag className="tag__info" color="#FAC857">
                      0 $
                    </Tag>
                  )}
                </Col>
                <Col
                  lg={24}
                  xl={24}
                  md={24}
                  xs={12}
                  className="col__container"
                >
                  <Typography.Text
                    strong
                    className="container___text"
                  >
                    {getTranslatedText('current_total_money_text')}
                  </Typography.Text>
                  {totalBonus ? (
                    <Tag className="tag__info" color="#FAC857">
                      {totalBonus} $
                    </Tag>
                  ) : (
                    <Tag className="tag__info" color="#FAC857">
                      0 $
                    </Tag>
                  )}
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    className="button"
                    onClick={() => handleAddMoneyToWallet()}
                  >
                    {getTranslatedText('button_add_money_to_wallet')}
                  </Button>
                </Col>
              </Row>
            </Layout.Content>
          </Layout>
        </Col>
        <Modal
          className="modal_card_container"
          visible={resultGameModalVisible}
          footer={null}
          onCancel={() => setResultGameModalVisible(false)}
          destroyOnClose={true}
        >
          <ResultWheelModal
            givenResult={givenResult}
            setResultGameModalVisible={setResultGameModalVisible}
            setAddMoneyToWaletModalVisible={
              setAddMoneyToWaletModalVisible
            }
            setTotalMoneyAdded={setTotalMoneyAdded}
            setTotalBonus={setTotalBonus}
          />
        </Modal>
        <Modal
          className="modal_card_container"
          visible={addMoneyToWalletModalVisible}
          footer={null}
          onCancel={() => setAddMoneyToWaletModalVisible(false)}
          destroyOnClose={true}
        >
          <AddMoneyToWallet
            totalBonus={totalBonus}
            totalMoneyAdded={totalMoneyAdded}
            setAddMoneyToWaletModalVisible={
              setAddMoneyToWaletModalVisible
            }
          />
        </Modal>
      </Row>
    </React.Fragment>
  );
};

export default Game;
