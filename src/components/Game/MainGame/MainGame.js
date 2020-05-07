import React, { useState, useEffect } from 'react';
import { Layout, Typography, Tabs, Col, Row, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import { getTranslatedText } from '../../../services/appService';
import '../MainGame/MainGame.scss';
import styled from 'styled-components';
import RuleGame from '../RuleGame/RuleGame';
import RankList from '../RankList/RankList';
import Game from '../Game/Game';
import LoginGame from '../Login/LoginGame';
import { Link } from 'react-router-dom';
import { routes } from '../../../constants';
const { Header, Content } = Layout;
const { TabPane } = Tabs;

const TabButton = styled.button`
		display: ${props => (props.disabled ? 'none' : 'inline')}
    width: 23.6vw;
    height: 6.4vh;
	background-color: #F0F0F0;
    transform: skew(-30deg);
    margin-left: 1.38vw;
`;

// background-color: ${props => props.disabled ? '#F0F0F0' : '#D59E29'};

const MainGame = () => {
  const [userName, setUserName] = useState('');
  const [codeName, setCodeName] = useState('');
  const [loginVisible, setLoginVisible] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [activeKey, setActiveKey] = useState('2');
  const [activeKey1, setActiveKey1] = useState('');
  const [activeKey2, setActiveKey2] = useState('');
  const [activeKey3, setActiveKey3] = useState('');

  useEffect(() => {
    const current_user = JSON.parse(
      window.localStorage.getItem('current_user'),
    );
    // 2. Vào trang game, check token người dùng, nếu không có thì hiện trang login. Login xong thì vào trang thể lệ game.
    if (current_user === null) {
      setLoginVisible(true);
      setButtonDisable(true);
    } else {
      if (current_user.roll_amount === 0) {
        setButtonDisable(true);
        alert(getTranslatedText('end_of_roll'));
      }
      setUserName(current_user.name);
      setCodeName(current_user.code);
    }
  }, []);

  useEffect(() => {
    const current_user = JSON.parse(
      window.localStorage.getItem('current_user'),
    );
    // 2. Vào trang game, check token người dùng, nếu không có thì hiện trang login. Login xong thì vào trang thể lệ game.
    if (current_user === null) {
      setLoginVisible(true);
      setButtonDisable(true);
      setActiveKey('1');
    } else {
      if (current_user.roll_amount === 0) {
        setButtonDisable(true);
        alert(getTranslatedText('end_of_roll'));
        setActiveKey('1');
      }
      setUserName(current_user.name);
      setCodeName(current_user.code);
    }
  }, []);
  useEffect(() => {
    switch (activeKey) {
      case '1':
        setActiveKey1('tab_button1');
        setActiveKey2('');
        setActiveKey3('');
        break;
      case '3':
        setActiveKey1('');
        setActiveKey2('');
        setActiveKey3('tab_button3');
        break;
      default:
        setActiveKey1('');
        setActiveKey2('tab_button2');
        setActiveKey3('');
        break;
    }
  }, [activeKey]);

  const handleOnChangeTab = key => {
    setActiveKey(key);
    console.log(typeof key);
  };

  return (
    <React.Fragment>
      <Layout className="main_game__container">
        <Header className="header_container">
          <Breadcrumb className="header_container__breadcrumb">
            <Link to={routes.home}>
              <Breadcrumb.Item className="header_container__breadcrumb_item">
                HOME
              </Breadcrumb.Item>
            </Link>
            <Breadcrumb.Item className="header_container__breadcrumb_item">
              MINIGAME
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col span={6}>{getTranslatedText('hello')}</Col>
            <Col
              lg={14}
              sm={14}
              xs={14}
              className="header_container__userName"
            >
              {userName}
            </Col>
            <Col span={4}>({codeName})</Col>
          </Row>
        </Header>
        <Content className="content_container">
          <Tabs
            className="tab_container"
            size="small"
            activeKey={activeKey}
            onChange={key => handleOnChangeTab(key)}
          >
            <TabPane
              className="tabPanel__container"
              tab={
                <TabButton className={activeKey1}>
                  <Typography.Text className="tabPanel__button_label">
                    {getTranslatedText('rule_game')}
                  </Typography.Text>
                </TabButton>
              }
              key="1"
            >
              <RuleGame />
            </TabPane>
            <TabPane
              className="tabPanel__container"
              tab={
                <TabButton
                  className={activeKey2}
                  disabled={buttonDisable}
                >
                  <Typography.Text className="tabPanel__button_label">
                    {getTranslatedText('play_game')}
                  </Typography.Text>
                </TabButton>
              }
              key="2"
            >
              <Game />
            </TabPane>
            <TabPane
              className="tabPanel__container"
              tab={
                <TabButton className={activeKey3}>
                  <Typography.Text className="tabPanel__button_label">
                    {getTranslatedText('rank_game')}
                  </Typography.Text>
                </TabButton>
              }
              key="3"
            >
              <RankList />
            </TabPane>
          </Tabs>
        </Content>
        <LoginGame
          loginVisible={loginVisible}
          setLoginVisible={setLoginVisible}
        />
      </Layout>
    </React.Fragment>
  );
};

export default MainGame;
