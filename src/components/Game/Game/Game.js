import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { getTranslatedText, resultGame } from '../../../services/appService';
import { routes } from '../../../constants';
import {
	rollingGame,
	addMoneyToWallet,
	getRollAmount,
	getRatioWheelOption,
} from '../../../services/appService';

function Wheel(props) {

	const {
		setResultGameModalVisible,
		setGivenResult,
		listOptionWheel,
		setTotalBonus,
		setTurnLeft,
	} = props;

	const [selectedItem, setSelectedItem] = useState(null);
	const [spinning, setSpinning] = useState('');

	useEffect(() => {
		if (selectedItem !== null) {
			setSpinning('spinning');
		}
		setTimeout(() => {
			setSelectedItem(null);
			setSpinning('');
		}, 4000);
		// selectItem();
	}, [selectedItem]);

	const selectItem = async () => {
		rollingGame()
		.then(response => {
			console.log(response)
			const givenResult = response.data.data.result;
			console.log(givenResult);
			const givenSelectItem = listOptionWheel.indexOf(givenResult);
			setSelectedItem(givenSelectItem);
			setTurnLeft(response.data.data.number);
			setTimeout(() => {
				setGivenResult(givenResult)
				setResultGameModalVisible(true);
				setTotalBonus(response.data.data.money);
			},4000)
		});
	}

	const wheelVars = {
		'--nb-item': listOptionWheel.length,
		'--selected-item': selectedItem,
	};
	// const spinning = selectedItem !== null ? 'spinning' : '';

	return (
		<div className="wheel-container">
			<div className={`wheel ${spinning}`} style={wheelVars} onClick={() => selectItem()}>
				{listOptionWheel.map((item, index) => (
					<div className="wheel-item" key={index} style={{ '--item-nb': index }}>
						${item}
					</div>
				))}
			</div>
		</div>
	);
}

const ResultWheelModal = (props) => {

	const {
		givenResult,
		setResultGameModalVisible,
	} = props;

	const handleNextRoundButton = () => {
		setResultGameModalVisible(false);
	};

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
								{getTranslatedText('result_modal_heading')}
							</Typography.Text>
						</Col>
						<Col span={16}>
							<Typography.Text>
								{getTranslatedText('result_modal_sub_heading')}
							</Typography.Text>
						</Col>
						<Col span={8}>
							<Tag
								color="#FAC857"
								className='tag__info'
							>
								{givenResult}$
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
								onClick={handleNextRoundButton}
							>
								<Typography.Text
									className="button_label"
								>
									{getTranslatedText('result_modal_next_round_button')}
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
									{getTranslatedText('result_modal_watch_bonus')}
								</Typography.Text>
							</Button>
						</Col>
					</Row>
				</Layout.Footer>
			</Layout>
		</React.Fragment>
	);
};

const AddMoneyToWallet = (props) => {
	const {
		setAddMoneyToWaletModalVisible,
		totalBonus,
	} = props;

	const handleCheckWalletButton = () => {
		setAddMoneyToWaletModalVisible(false);
	};

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
								{getTranslatedText('add_money_success')}
							</Typography.Text>
						</Col>
						<Col span={16}>
							<Typography.Text>
								{getTranslatedText('add_money_content')}
							</Typography.Text>
						</Col>
						<Col span={8}>
							<Typography.Text>
								{getTranslatedText('current_money_add')}
							</Typography.Text>
							<Tag
								color="#FAC857"
								className='tag__info'
							>
								{totalBonus} $
                            </Tag>
						</Col>
					</Row>
				</Layout.Content>
				<Layout.Footer
					className="footer__container"
				>
					<Row>
						<Col span={24}>
							<Link
								to={routes.accountWallet}
							>
								<Button
									className="button"
									onClick={() => handleCheckWalletButton()}
								>
									<Typography.Text
										className="button_label"
									>
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
const TurnStatusTag = (props) => {

		
	const {
		listTurnArray,
	} = props;

	const [listTurnArrayRender, setListTurnArrayRender] = useState([]);
	useEffect(() => {
		setListTurnArrayRender(listTurnArray);
	}, [listTurnArray]);

	return (
		<React.Fragment>
			<List
					className="list_number_of_turn__container"
					dataSource={listTurnArrayRender}
					renderItem={item => (
						<List.Item>
							{item.used === 'used' ? (
								<Tag
									className="tag_turn"
									color="#F0F0F0"
								>
								{getTranslatedText('game_turn')} {item.turn}
								</Tag>	
							) : (
								<Tag
									className="tag_turn"
									color="#FAC857"
								>
								{getTranslatedText('game_turn')} {item.turn}
								</Tag>
							)}
						</List.Item>
					)}
				/>
		</React.Fragment>
	)
};

const Game = () => {

	const [resultGameModalVisible, setResultGameModalVisible] = useState(false);
	const [addMoneyToWalletModalVisible, setAddMoneyToWaletModalVisible] = useState(false);
	const [listTurnArray, setListTurnArray] = useState([]);
	const [givenResult, setGivenResult] = useState(null);
	const [totalBonus, setTotalBonus] = useState(null);
	const [listOptionWheel, setListOptionWheel] = useState([]);
	const [turnLeft, setTurnLeft] = useState(0);


	// render component Game, request list option cho con quay
	useEffect(() => {
		getRatioWheelOption()
		.then(response => {
			console.log(response.data.data);
			setListOptionWheel(response.data.data);
		})
		.catch(e => {
			console.log(e);
		});
	}, []);

	// Lay tong so roll cua nguoi dung
	useEffect(() => {
			getRollAmount()
				.then(response => {
					setListTurnArray(response);
					console.log('roll amount', response)
			})
	}, []);

	// Lay tong so tien bonus
	useEffect(() => {
		if (resultGameModalVisible === true) {
			const turnUsed = listTurnArray.length - turnLeft;
			console.log('turn use', turnUsed)
			for (let i = 0; i < turnUsed; i++) {
				console.log('turn')
				listTurnArray.forEach(element => {
					if (element.index === i) {
						console.log('Yes');
						element.used = 'used'
					}
				});
			}
			setListTurnArray(listTurnArray);
			console.log('new list turn', listTurnArray);
		}
	}, [resultGameModalVisible]);

	const handleAddMoneyToWallet = () => {
		addMoneyToWallet()
			.then(response => {
				console.log(response);
				setAddMoneyToWaletModalVisible(true);
			});
	};

	return (
		<Row>
			<Col
				span={4}
				className="game_turn_container"
			>
				<Typography.Text
					className="label_turn"
				>
					{getTranslatedText('turn_list_label')} {listTurnArray.length - turnLeft}
				</Typography.Text>
					<TurnStatusTag
						listTurnArray={listTurnArray}
					/>
			</Col>
			<Col
				span={12}
				offset={1}
			>
				<Wheel
					setResultGameModalVisible={setResultGameModalVisible}
					setGivenResult={setGivenResult}
					listOptionWheel={listOptionWheel}
					setTotalBonus={setTotalBonus}
					setTurnLeft={setTurnLeft}
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
									{getTranslatedText('current_result_text')}
								</Typography.Text>
								{givenResult ? (
									<Tag
										className="tag__info"
										color="#FAC857"
									>
										{givenResult} $
									</Tag>
								) : (
										<Tag
											className="tag__info"
											color="#FAC857"
										>
											0 $
										</Tag>
									)}
							</Col>
							<Col span={24}
								className="col__container"
							>
								<Typography.Text
									strong
								>
									{getTranslatedText('current_total_money_text')}
								</Typography.Text>
								{totalBonus ? (
									<Tag
										className="tag__info"
										color="#FAC857"
									>
										{totalBonus} $
									</Tag>
								) : (
										<Tag
											className="tag__info"
											color="#FAC857"
										>
											0 $
										</Tag>
									)}
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
							onClick={() => handleAddMoneyToWallet()}
						>
							{getTranslatedText('button_add_money_to_wallet')}
						</Button>
					</Layout.Footer>
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
					setAddMoneyToWaletModalVisible={setAddMoneyToWaletModalVisible}
				/>
			</Modal>
		</Row>
	);
};

export default Game;