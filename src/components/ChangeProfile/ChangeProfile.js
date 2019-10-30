import React from 'react';
import './ChangeProfile.scss';
import UploadIcon from '../../assets/images/icon_upload.svg';
import UserPhoto from '../../assets/images/userphoto.png';

function ChangeProfile() {
  return (
    <div className="ChangeProfile">
      <div className="Title">Thông tin cá nhân</div>
      <div className="Profile">
        <div className="Avatar">
          <img className="Photo" alt="avatar" src={UserPhoto}></img>
          <div>
            <div className="ChangePhotoText">
              Cập nhật ảnh đại diện mới
            </div>
            <div className="ChangePhotoButton">
              <img alt="upload" src={UploadIcon}></img>
              <div>chọn ảnh</div>
            </div>
          </div>
        </div>
        <div className="GroupProfile">
          <div className="GroupProfile1">
            <div className="Fullname">
              <div className="Text">Họ Tên</div>
              <input type="text" placeholder="Hồ Đức Lợi"></input>
            </div>
            <div className="Email">
              <div className="Text">Email</div>
              <input
                type="text"
                placeholder="nguyenvana@gmail.com"
              ></input>
            </div>
            <div className="ReferralCode">
              <div className="Text">Mã giới thiệu của bạn</div>
              <input type="text" placeholder="loiho"></input>
            </div>
          </div>
          <div className="GroupProfile2">
            <div className="PhoneNumber">
              <div className="Text">Số điện thoại</div>
              <input type="number" placeholder="08765456"></input>
            </div>
            <div className="Password">
              <div className="Text">Mật khẩu</div>
              <input type="text" placeholder="**********"></input>
            </div>
            <div className="NewPassword">
              <div>
                <div className="Text">Mật khẩu mới</div>
                <input type="text"></input>
              </div>
              <div>
                <div className="Text">Nhập lại mật khẩu mới</div>
                <input type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ButtonContainer">
        <div className="CancelButton">HỦY BỎ</div>
        <div className="UpdateButton">CẬP NHẬT</div>
      </div>
    </div>
  );
}

export default ChangeProfile;
