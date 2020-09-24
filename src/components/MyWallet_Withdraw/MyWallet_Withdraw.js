import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyWallet_Withdraw.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import AccountBreadcrumb from '../AccountBreadcrumb/AccountBreadcrumb';
import {
  getUserFormLocal,
  currencyFormatter,
  getTranslatedText,
} from '../../services/appService';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import {
  withdrawMoneyAction,
  getProfileAction,
  postContract,
} from '../../actions/profile';
import { routes } from '../../constants';
import * as types from '../../actions/index';
import QuizModal from '../QuizModal/QuizModal';
import {
  Button,
  Col,
  Layout,
  Modal,
  Row,
  Tag,
  Typography,
} from 'antd';
import logo from '../../assets/images/logo.svg';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import contract from '../../assets/images/contract.pdf';

class MyWallet_Withdraw extends Component {
  state = {
    currentUser: {},
    bankName: '',
    bankAccount: '',
    bankAddress: '',
    swiftCode: '',
    fullName: '',
    amount: '',
    type: 'traditional',
    paypal_email: '',
    paypal_name: '',
    front_cmnd: '',
    back_cmnd: '',
    preview_front_cmnd: '',
    preview_back_cmnd: '',
    address: '',
    tax_code: '',
    is_verify_contract: false,
    modal_visible: false,
    button_enable: false,
    numPage: 1,
    totalPage: 1,
    id_card: '',
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.setState({
        currentUser: getUserFormLocal(),
      });

      this.setState({
        bankAccount: this.state.currentUser.bank_account,
        bankName: this.state.currentUser.bank_name,
        fullName: this.state.currentUser.bank_full_name,
        paypal_email: this.state.currentUser.paypal_email,
        paypal_name: this.state.currentUser.paypal_name,
        is_verify_contract: this.state.currentUser.is_verify_contract,
      });
    }
  }

  handleImageChange = e => {
    let files = e.target.files;
    const { name } = e.target;
    if (files.length > 0) {
      this.setState({
        [name]: files[0],
        ['preview_' + name]: URL.createObjectURL(files[0]),
      });
    } else {
      this.setState({
        [name]: null,
        ['preview_' + name]: '',
      });
    }
  };

  toggleShowTab = () => {
    this.setState({
      isShowWithdraw: !this.state.isShowWithdraw,
    });
  };

  componentDidMount() {
    this.props.actions.getProfileAction({
      token: localStorage.getItem(types.TOKEN_KEY),
    });
    this.checkCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentUser: nextProps.currentUser,
    });
    this.checkCurrentUser();
  }

  withdrawMoneyAction = () => {
    let payload = {
      bank_name: this.state.bankName,
      // bank_branch: this.state.bankBranch,
      bank_account: this.state.bankAccount,
      full_name: this.state.fullName,
      amount: this.state.amount,
      bank_address: this.state.bankAddress,
      swift_code: this.state.swiftCode,
      type: this.state.type,
      paypal_name: this.state.paypal_name,
      paypal_email: this.state.paypal_email,
    };

    let form_data = new FormData();

    for (let key in payload) {
      form_data.append(key, payload[key]);
    }

    this.props.actions.withdrawMoneyAction(form_data);
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  nextPage() {
    let curPage = this.state.numPage;
    if (curPage === this.state.totalPage) {
      alert('Last page');
      return;
    }

    this.setState({ numPage: curPage + 1 });
  }

  prevPage() {
    let curPage = this.state.numPage;
    if (curPage === 1) {
      alert('First page');
      return;
    }

    this.setState({ numPage: curPage - 1 });
  }

  doPostContract() {
    this.setState({ modal_visible: false });
    let payload = {
      token: this.state.currentUser.remember_token,
      address: this.state.address,
      front_id_card: this.state.front_cmnd,
      back_id_card: this.state.back_cmnd,
      tax_code: this.state.tax_code,
      id_card: this.state.id_card,
    };

    let form_data = new FormData();

    for (let key in payload) {
      form_data.append(key, payload[key]);
    }

    this.props.actions.postContract(form_data);
  }

  render() {
    const {
      bankName,
      // bankBranch,
      bankAccount,
      bankAddress,
      swiftCode,
      fullName,
      amount,
      paypal_email,
      paypal_name,
      type,
      address,
      tax_code,
    } = this.state;

    return (
      <div>
        <AccountBreadcrumb />
        <div className="MyWallet_Withdraw">
          <div className="ContentContainer">
            <div className="TransactionInfo">
              {!this.state.is_verify_contract ? (
                <>
                  <div>{getTranslatedText('verify_contract')}</div>

                  <div className="WithdrawAmount">
                    <div>{getTranslatedText('id_card')}*</div>
                    <input
                      type="number"
                      value={this.state.id_card}
                      onChange={this.handleChange('id_card')}
                    />
                  </div>

                  <div className="WithdrawAmount">
                    <div>{getTranslatedText('address')}*</div>
                    <input
                      type="text"
                      value={this.state.address}
                      onChange={this.handleChange('address')}
                    />
                  </div>

                  <div className="WithdrawAmount">
                    <div>{getTranslatedText('tax_code')}</div>
                    <input
                      type="text"
                      value={this.state.tax_code}
                      name="tax_code"
                      onChange={this.handleChange('tax_code')}
                    />
                  </div>

                  <div className="">
                    <div>{getTranslatedText('front_cmnd')}*</div>
                    <input
                      type="file"
                      name="front_cmnd"
                      onChange={this.handleImageChange}
                    />
                  </div>

                  <div>
                    <div>
                      {getTranslatedText('image_of')}{' '}
                      {getTranslatedText('front_cmnd')}*
                    </div>
                    <img
                      src={this.state.preview_front_cmnd}
                      width="150"
                      alt=""
                    />
                  </div>

                  <div className="">
                    <div>{getTranslatedText('back_cmnd')}*</div>
                    <input
                      type="file"
                      name="back_cmnd"
                      onChange={this.handleImageChange}
                    />
                  </div>

                  <div>
                    <div>
                      {getTranslatedText('image_of')}{' '}
                      {getTranslatedText('back_cmnd')}*
                    </div>
                    <img
                      src={this.state.preview_back_cmnd}
                      width="150"
                      alt=""
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>{getTranslatedText('fill_to_withdraw')}</div>
                  <div className="Title">
                    <div>{getTranslatedText('my_wallet')}</div>
                    <img alt="arrow right" src={ArrowRight}></img>
                    <div>{getTranslatedText('withdraw')}</div>
                  </div>
                  <div className="BankName">
                    <div>{getTranslatedText('withdraw_type')}</div>
                    <select
                      onChange={row =>
                        this.setState({ type: row.target.value })
                      }
                    >
                      <option value="traditional">Bank</option>
                      <option value="online-banking">Paypal</option>
                    </select>
                  </div>
                  {type === 'online-banking' ? (
                    <>
                      <div className="PaypalEmail">
                        <div>{getTranslatedText('paypal_email')}</div>
                        <input
                          placeholder={getTranslatedText(
                            'paypal_email',
                          )}
                          value={paypal_email}
                          name="paypal_email"
                          onChange={this.handleChange('paypal_email')}
                          disabled={
                            this.state.currentUser.paypal_email
                          }
                        />
                      </div>
                      <div className="PaypalName">
                        <div>{getTranslatedText('paypal_name')}</div>
                        <input
                          placeholder={getTranslatedText(
                            'paypal_name',
                          )}
                          value={paypal_name}
                          name="paypal_name"
                          onChange={this.handleChange('paypal_name')}
                          disabled={
                            this.state.currentUser.paypal_name
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="BankName">
                        <div>{getTranslatedText('bank_name')}</div>
                        <input
                          placeholder={getTranslatedText(
                            'your_bank_name',
                          )}
                          value={bankName}
                          onChange={this.handleChange('bankName')}
                          disabled={this.state.currentUser.bank_name}
                        />
                      </div>
                      {/* <div className="BankBranch">
                <div>Branch of Beneficiary Bank</div>
                <input
                  placeholder="What is your branch of beneficiary bank"
                  value={bankBranch}
                  onChange={this.handleChange('bankBranch')}
                />
              </div> */}
                      <div className="BankAccount">
                        <div>{getTranslatedText('bank_number')}</div>
                        <input
                          type="text"
                          placeholder={getTranslatedText(
                            'your_bank_number',
                          )}
                          value={bankAccount}
                          onChange={this.handleChange('bankAccount')}
                          disabled={
                            this.state.currentUser.bank_account
                          }
                        />
                      </div>
                      <div className="BankAddress">
                        <div>{getTranslatedText('bank_address')}</div>
                        <input
                          type="text"
                          placeholder={getTranslatedText(
                            'your_bank_address',
                          )}
                          value={bankAddress}
                          onChange={this.handleChange('bankAddress')}
                        />
                      </div>
                      <div className="SwiftCode">
                        <div>{getTranslatedText('swift_code')}</div>
                        <input
                          type="text"
                          placeholder={getTranslatedText(
                            'your_swift_code',
                          )}
                          value={swiftCode}
                          onChange={this.handleChange('swiftCode')}
                        />
                      </div>
                      <div className="FullName">
                        <div>{getTranslatedText('full_name')}</div>
                        <input
                          type="text"
                          placeholder={getTranslatedText('full_name')}
                          value={fullName}
                          onChange={this.handleChange('fullName')}
                          disabled={
                            this.state.currentUser.bank_full_name
                          }
                        />
                      </div>
                    </>
                  )}

                  <div className="WithdrawAmount">
                    <div>{getTranslatedText('amount')}</div>
                    <input
                      type="number"
                      placeholder={getTranslatedText(
                        'amount_withdraw',
                      )}
                      value={amount}
                      onChange={this.handleChange('amount')}
                      step="1"
                      min="0"
                    />
                  </div>

                  <div className="Note">
                    {getTranslatedText('important_withdraw')}
                  </div>
                </>
              )}
            </div>

            <div className="Card">
              <div className="User">
                <img
                  className="Photo"
                  alt="avatar"
                  src={
                    this.state.currentUser.avatar || DefaultUserAvatar
                  }
                />
                <div>{this.state.currentUser.name || ''}</div>
              </div>
              <div className="Balance">
                <div className="Text">
                  {getTranslatedText('Balance')}
                </div>
                <div className="Number">
                  {currencyFormatter(
                    this.state.currentUser.total_price,
                  )}
                </div>
              </div>
            </div>
          </div>
          {this.state.is_verify_contract ? (
            <div
              className="TransactionRequest"
              onClick={this.withdrawMoneyAction}
            >
              {getTranslatedText('REQUEST')}
            </div>
          ) : (
            <div
              className="TransactionRequest"
              onClick={() => this.setState({ modal_visible: true })}
            >
              {getTranslatedText('REQUEST')}
            </div>
          )}
          <Link to={routes.accountWallet}>
            <div className="CancelButton">
              {getTranslatedText('CANCEL')}
            </div>
          </Link>
        </div>
        <Modal
          visible={this.state.modal_visible}
          footer={false}
          width="796px"
          onCancel={() => this.setState({ modal_visible: false })}
          destroyOnClose={true}
        >
          <React.Fragment>
            <Layout>
              <Layout.Header className="logo__container">
                <img src={logo} />
              </Layout.Header>
              <Layout.Content className="content__container">
                <Row>
                  <Col span={24}>
                    <Typography.Text className="content_heading">
                      {getTranslatedText('contract_info')}
                    </Typography.Text>
                  </Col>
                  <Col span={24}>
                    <Document
                      file={contract}
                      onLoadSuccess={e =>
                        this.setState({ totalPage: e.numPages })
                      }
                    >
                      <Page
                        pageNumber={this.state.numPage}
                        width="750"
                      />
                    </Document>
                    <p>
                      {getTranslatedText('page')} {this.state.numPage}{' '}
                      {getTranslatedText('of')} {this.state.totalPage}{' '}
                      {getTranslatedText('page')}
                    </p>
                    <button onClick={() => this.prevPage()}>
                      Prev
                    </button>
                    <button onClick={() => this.nextPage()}>
                      Next
                    </button>
                  </Col>
                  <Col span={24} style={{ marginTop: '15px' }}>
                    <label htmlFor="agree">
                      <input
                        type="checkbox"
                        id="agree"
                        onChange={e =>
                          this.setState({
                            button_enable: e.target.checked,
                          })
                        }
                      />{' '}
                      <strong>
                        {getTranslatedText('accept_contract')}
                      </strong>
                    </label>
                  </Col>
                  <Col span={24}>
                    <div>{getTranslatedText('note_contract')}</div>
                  </Col>
                </Row>
              </Layout.Content>
              <Layout.Footer className="footer__container">
                <Row gutter={16}>
                  <Col span={12} xs={24} xl={12}>
                    <Button
                      className="modal__button"
                      onClick={() => this.doPostContract()}
                      disabled={!this.state.button_enable}
                    >
                      <Typography.Text className="button_label">
                        {getTranslatedText('request')}
                      </Typography.Text>
                    </Button>
                  </Col>
                </Row>
              </Layout.Footer>
            </Layout>
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }, ownProps) => {
  return {
    currentUser: profile.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        withdrawMoneyAction,
        getProfileAction,
        postContract,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyWallet_Withdraw);
