import React, { Component } from 'react';
import './MyWallet_Withdraw.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import UserPhoto from '../../assets/images/userphoto.png';

class MyWallet_Withdraw extends Component {
  render() {
    return (
      <div className="MyWallet_Withdraw">
        <div className="Title">
          <div>Thông tin ví của tôi</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>Rút tiền</div>
        </div>

        <div className="ContentContainer">
          <div className="TransactionInfo">
            <div>
              Hãy nhập các thông tin bên dưới để tiến hành rút tiền
            </div>
            <div className="Bank">
              <div>Chọn ngân hàng</div>
              <select placeholder="Nhập ngân hàng của bạn">
                <option>Vietcombank</option>
                <option>Sacombank</option>
                <option>ACB</option>
                <option>VPBank</option>
              </select>
            </div>
            <div className="BankAccount">
              <div>Số tài khoản</div>
              <input
                type="number"
                placeholder="Nhập số tài khoản"
              ></input>
            </div>
            <div className="WithdrawAmount">
              <div>Số tiền giao dịch</div>
              <input
                type="number"
                placeholder="Nhập số tiền cần rút"
              ></input>
            </div>
            <div className="Note">
              Lưu ý: Số tiền cần rút phải nhỏ hơn hoặc bằng với số dư
              trong ví của bạn.
            </div>
          </div>

          <div className="Card">
            <div className="User">
              <img
                className="Photo"
                alt="avatar"
                src={UserPhoto}
              ></img>
              <div>Hồ Đức Lợi</div>
            </div>
            <div className="Balance">
              <div className="Text">Số dư hiện tại</div>
              <div className="Number">$250,000</div>
            </div>
          </div>
        </div>
        <div
          className="CancelButton"
          onClick={this.props.onCancelClick}
        >
          HỦY BỎ
        </div>
        <div
          className="TransactionRequest"
          onClick={this.props.onRequestClick}
        >
          YÊU CẦU GIAO DỊCH
        </div>
      </div>
    );
  }
}

export default MyWallet_Withdraw;
