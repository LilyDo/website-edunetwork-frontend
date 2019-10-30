import React from 'react';
import './MyWallet.scss';
import UserPhoto from '../../assets/images/userphoto.png';

function MyWallet() {
  return (
    <div className="MyWallet">
      <div className="Title">Thông tin ví của tôi</div>
      <div className="Card">
        <div className="User">
          <img className="Photo" alt="avatar" src={UserPhoto}></img>
          <div>Hồ Đức Lợi</div>
        </div>
        <div className="Balance">
          <div className="Text">Số dư hiện tại</div>
          <div className="Number">$250,000</div>
        </div>
      </div>
      <div className="ButtonContainer">
        <div className="WithdrawButton">RÚT TIỀN</div>
        <div className="TopupButton">NẠP TIỀN</div>
      </div>
      <div className="Transactions">
        <div className="Text">LỊCH SỬ GIAO DỊCH</div>
        <div className="Actions">
          <div className="Withdraw">Rút tiền</div>
          <div className="Topup">Nạp tiền</div>
        </div>
        <table>
          <thead className="TransactionTableHead">
            <tr>
              <th className="Date">Ngày</th>
              <th className="Code">Mã giao dịch</th>
              <th className="Amount">Số Tiền giao dịch</th>
              <th className="Status">Tình trạng</th>
            </tr>
          </thead>
          <tbody className="TransactionTableBody">
            <tr>
              <td>15/03/2019</td>
              <td>EX 203456</td>
              <td>$400,00</td>
              <td>Thành công</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyWallet;
