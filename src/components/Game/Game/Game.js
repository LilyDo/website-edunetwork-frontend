import React, { useState, useEffect } from 'react';
import {
    Row,
    Col,
    List,
    Button,
    Typography,
    Layout,
    Tag,
    Modal
} from 'antd';
import 'antd/dist/antd.css'
import '../Game/Game.css';
import { rollingGame, addMoneyToWallet} from '../../../services/appService';

class Wheel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
        };

    this.selectItem = this.selectItem.bind(this);
    }

    selectItem() {
        if (this.state.selectedItem === null) {
          const selectedItem = Math.floor(Math.random() * this.props.items.length);
          console.log(selectedItem)
          if (this.props.onSelectItem) {
            this.props.onSelectItem(selectedItem);
          }
          this.setState({ selectedItem });
        } else {
          this.setState({ selectedItem: null });
          setTimeout(this.selectItem, 500);
        }
      }

      render() {
        const { selectedItem } = this.state;
        const { items, setResultGameModalVisible } = this.props;
    
        const wheelVars = {
          '--nb-item': items.length,
          '--selected-item': selectedItem,
        };
        const spinning = selectedItem !== null ? 'spinning' : '';
        if(selectedItem !==null) {
            setTimeout(() => {
                setResultGameModalVisible(true);
            }, 4500)
        }
        return (
          <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
              {items.map((item, index) => (
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        );
      }
}

const ResultWheelModal = () => {
    return (
        <React.Fragment>
            <Layout>
                <Layout.Header
                    className="logo__container"
                >
                    <img 
                        src={require('../../../assets/images/logo.svg')} />
                </Layout.Header>
                <Layout.Content
                    className="content__container"
                >
                    <Row>
                        <Col span={24}>
                            <Typography.Text
                                className="content_heading"
                            >
                                XIN CHÚC MỪNG!
                            </Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Text>
                                Bạn vừa tham gia vòng quay may mắn, và lượt quay của bạn nhận được tiền thưởng là:
                            </Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Tag
                                color="#FAC857"
                                className='tag__info'
                            >
                                4 $
                            </Tag>
                        </Col>
                    </Row>
                </Layout.Content>
                <Layout.Footer
                    className="footer__container"
                >
                    <Row>
                        <Col span={12}>
                            <Button
                                className="button"
                            >
                                <Typography.Text
                                    className="button_label"
                                >
                                    QUAY LƯỢT TIẾP
                                </Typography.Text>
                            </Button>
                        </Col>
                        <Col span={12}>
                            <Button
                                className="button"
                            >
                                <Typography.Text
                                    className="button_label"
                                >
                                    XEM TIỀN THƯỞNG CỦA TÔI 
                                </Typography.Text>
                            </Button>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const AddMoneyToWallet = () => {
    return (
        <React.Fragment>
            <Layout>
                <Layout.Header
                    className="logo__container"
                >
                    <img 
                        src={require('../../../assets/images/logo.svg')} />
                </Layout.Header>
                <Layout.Content
                    className="content__container"
                >
                    <Row>
                        <Col span={24}>
                            <Typography.Text
                                className="content_heading"
                            >
                                NẠP TIỀN VÀO VÍ THÀNH CÔNG!
                            </Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Text>
                                Xin chúc mừng! Bạn vừa nạp thêm tiền vào ví thành công.
                            </Typography.Text>
                        </Col>
                        <Col span={8}>
                            <Typography.Text>
                                Số tiền bạn vừa nạp vào ví
                            </Typography.Text>
                            <Tag
                                color="#FAC857"
                                className='tag__info'
                            >
                                15 $
                            </Tag>
                        </Col>
                    </Row>
                </Layout.Content>
                <Layout.Footer
                    className="footer__container"
                >
                    <Row>
                        <Col span={24}>
                            <Button
                                className="button"
                            >
                                <Typography.Text
                                    className="button_label"
                                >
                                    XEM VÍ NGAY  
                                </Typography.Text>
                            </Button>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </React.Fragment>
    );
};

const Game = () => {

    const [ givenItem, setGivenItem ] = useState(null);
    const [ resultGameModalVisible, setResultGameModalVisible ] = useState(false);
    const [ addMoneyToWalletModalVisible, setAddMoneyToWaletModalVisible ] = useState(false);
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        rollingGame()
        .then(response => {
            console.log(response);
        })
        // const user_amount = JSON.parse(window.localStorage.getItem('current_user'));
        // console.log(typeof(user_amount.roll_amount))
        // for (let index = 1; index <= user_amount.roll_amount; index++) {
        //     const item = index.toString();
        //     setDataList(dataList.push(item))
        // }
    }, [])

    // render status number of turn

    const TurnStatusTag = () => {

    };

    return (
        <Row>
            <Col
                span={4}
            >
                <List
                    className="list_number_of_turn__container"
                    dataSource={dataList}
                    renderItem={item => (
                        <List.Item>
                            <Tag
                                className="tag_turn"
                                color="#FAC857"
                            >
                                {item}
                            </Tag>
                        </List.Item>
                    )}
                />

            </Col>
            <Col
                span={12}
                offset={1}
            >
                <Wheel
                    items={['$5', '$2', '$3', '$10', '$1', '$4']}
                    setResultGameModalVisible={setResultGameModalVisible}
                />
            </Col>
            <Col span={6}>
                <Layout
                    className="event_info__container"
                >
                    <Layout.Header
                        className="time_event_header_container"
                    >
                        <p>Thời gian event:<br /> 25/03/2020 - 25/04/2020 </p>
                    </Layout.Header>
                    <Layout.Content
                        style={{
                            backgroundColor: 'white',
                            paddingTop: 12,
                            paddingLeft: 16,
                        }}
                    >
                        <Row
                            justify='space-between'
                        >
                            <Col span={24}
                                className="col__container"
                            >
                                <Typography.Text
                                    strong
                                >
                                    Bạn vừa quay được:
                                </Typography.Text>
                                <Tag
                                    className="tag__info"
                                    color="#FAC857"
                                >
                                    4 $
                                </Tag>
                            </Col>
                            <Col span={24}
                                className="col__container"
                            >
                                <Typography.Text
                                    strong
                                >
                                    Tổng tiền thưởng
                                    của bạn:
                                </Typography.Text>
                                <Tag
                                    className="tag__info"
                                    color="#FAC857"
                                >
                                    5 $
                                </Tag>
                            </Col>
                        </Row>
                    </Layout.Content>
                    <Layout.Footer
                        style={{
                            backgroundColor: 'white'
                        }}
                    >
                        <Button
                            className="button"
                            onClick={() => setAddMoneyToWaletModalVisible(true)}
                        >
                            <Typography.Text
                                className="button_label"
                            >
                                NẠP TIỀN VÀO VÍ NGAY
                            </Typography.Text>
                        </Button>
                    </Layout.Footer>
                </Layout>
            </Col>
            <Modal
                className="modal_card_container"
                visible={resultGameModalVisible}
                footer={null}
            >
                <ResultWheelModal />
            </Modal>
            <Modal
                className="modal_card_container"
                visible={addMoneyToWalletModalVisible}
                footer={null}
            >
                <AddMoneyToWallet />
            </Modal>
        </Row>
    );
};

export default Game;