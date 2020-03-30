import React, {useState, useEffect } from 'react';
import {
    Layout,
    Typography,
    Tabs,
} from 'antd';
import 'antd/dist/antd.css';
import { getTranlastedText, getTranslatedText } from '../../../services/appService';
import '../MainGame/MainGame.css';
import styled from 'styled-components';
import RuleGame from '../RuleGame/RuleGame';
import RankList from '../RankList/RankList';
import Game from '../Game/Game';
import LoginGame from '../Login/LoginGame';
const { Header, Content} = Layout;
const { TabPane } = Tabs;

const TabButton = styled.button`
    width: 311px;
    height: 58px;
    background-color: #D59E29;
    transform: skew(-30deg);
    margin-left: 20px;
`


const MainGame = () => {

    const [userName, setUserName] = useState('');
    const [loginVisible, setLoginVisible] = useState(false);
    const [buttonMainGameDisable, setButtonMainGameDisable] = useState(false);

    useEffect(() => {
        const current_user = JSON.parse(window.localStorage.getItem('current_user'));
        // 2. Vào trang game, check token người dùng, nếu không có thì hiện trang login. Login xong thì vào trang thể lệ game.
        if (current_user === null) {
            setLoginVisible(true);
            setButtonMainGameDisable(true);
        } else {
            if (current_user.roll_amount === 0) {
                setButtonMainGameDisable(true);
                alert('You have no sale to play this game');
            };
        };
    }, [])

    return (
        <React.Fragment>
            <Layout
                className="ruleGame__container"
            >
                <Header
                    className="header_container"
                >
                    <Typography.Text>
                        {userName}
                    </Typography.Text>
                </Header>
                <Content
                    className="content_container"
                >
                    <Tabs size='small' defaultActiveKey="2">
                        <TabPane 
                            className="tabPanel__container"
                            tab={<TabButton>
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {getTranslatedText('rule_game')}
                                </Typography.Text>
                            </TabButton>} key="1">
                                <RuleGame />
                        </TabPane>
                        <TabPane
                            className="tabPanel__container"
                            tab={<TabButton
                                    disabled={buttonMainGameDisable}
                                    >
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {getTranslatedText('play_game')}
                                </Typography.Text>
                            </TabButton>} key="2">
                                <Game />
                        </TabPane>
                        <TabPane tab={<TabButton>
                                <Typography.Text
                                    style={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {getTranslatedText('rank_game')}
                                </Typography.Text>
                            </TabButton>} key="3">
                                <RankList />
                        </TabPane>
                    </Tabs>
                </Content>
                <LoginGame
                    loginVisible={loginVisible}
                />
            </Layout>
        </React.Fragment>
    );
};

export default MainGame;