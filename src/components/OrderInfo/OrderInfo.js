import React from 'react';
import './OrderInfo.scss';
import TimeIcon from '../../assets/images/icon_time.svg';
import BookIcon from '../../assets/images/icon_book.svg';
import OwnerIcon from '../../assets/images/icon_owner.svg';

function OrderInfo() {
  return (
    <div className="OrderInfoContainer">
      <div className="Title">THÔNG TIN ĐƠN HÀNG CỦA BẠN</div>
      <div className="OrderInfo">
        <div className="CourseInfo">
          <div>Tên khóa học</div>
          <div className="CourseHeader">
            <div className="HeaderText">
              BẬC THẦY VỀ NGHỆ THUẬT LÃNH ĐẠO
            </div>
            <div className="LevelContainer">
              <div className="Text">Level</div>
              <div className="Level">Expert</div>
            </div>
            <div className="PriceContainer">
              <div className="Text">Price</div>
              <div className="NumberContainer">
                <div className="PriceNumber">
                  <span>1000</span>
                  <sup>usd</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="Info">
            <div className="Container">
              <img alt="time" src={TimeIcon}></img>
              <div className="Text">
                Thời lượng: <span>03 giờ 30 phút</span>
              </div>
            </div>
            <div className="Container">
              <img alt="book" src={BookIcon}></img>
              <div className="Text">
                Giáo trình: <span>42 bài giảng</span>
              </div>
            </div>
            <div className="Container">
              <img alt="own" src={OwnerIcon}></img>
              <div className="Text">Sở hữu khóa học trọn đời</div>
            </div>
          </div>
        </div>
        <div className="WalletInfoContainer">
          <div className="WalletTitle">VÍ CỦA BẠN</div>
          <div className="WalletInfo">
            <div className="WalletInfoItems">
              <div className="Container Remaining">
                <div className="Text">Số dư hiện tại trong ví:</div>
                <div className="Number">700</div>
                <div className="Currency">usd</div>
              </div>
              <div className="Container PendingOrder">
                <div className="Text">Đơn hàng cần thanh toán:</div>
                <div className="Number">1000</div>
                <div className="Currency">usd</div>
              </div>
              <div className="Container Missing">
                <div className="Text">
                  Để thanh toán cho đơn hàng, bạn cần nạp thêm:
                </div>
                <div className="Number">300</div>
                <div className="Currency">usd</div>
              </div>
            </div>
            <div className="TopupNow">NẠP NGAY</div>
          </div>
        </div>
      </div>
      <div className="TextNotice">{`Lưu ý:

Sau khi tiến hành thanh toán, khóa học của bạn sẽ được kích hoạt ngay để bạn có thể bắt đầu vào học.

Ngoài ra, chúng tôi cũng đã gửi thông tin khóa học qua email cho bạn. Hãy kiểm tra email nhé!`}</div>
    </div>
  );
}

export default OrderInfo;
