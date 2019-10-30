import React from 'react';
import './MyProfile.scss';
import EditIcon from '../../assets/images/icon_edit.svg';
import UserPhoto from '../../assets/images/userphoto.png';

function MyProfile() {
  return (
    <div className="MyProfile">
      <div className="Title">Thông tin cá nhân</div>
      <div className="Profile">
        <img className="EditIcon" alt="edit" src={EditIcon}></img>
        <div className="Avatar">
          <img className="Photo" alt="avatar" src={UserPhoto}></img>
          <div>Hồ Đức Lợi</div>
        </div>
        <div className="GroupProfile">
          <div className="GroupProfile1">
            <div className="Fullname">
              <div className="Text">Họ Tên</div>
              <div className="Data">Hồ Đức Lợi</div>
            </div>
            <div className="Email">
              <div className="Text">Email</div>
              <div className="Data">nguyenvana@gmail.com</div>
            </div>
            <div className="ReferralCode">
              <div className="Text">Mã giới thiệu của bạn</div>
              <div className="Data">loiho</div>
            </div>
          </div>
          <div className="GroupProfile2">
            <div className="PhoneNumber">
              <div className="Text">Số điện thoại</div>
              <div className="Data">08765456</div>
            </div>
            <div className="Password">
              <div className="Text">Mật khẩu</div>
              <div className="Data">************</div>
            </div>
            <div className="Sponsor">
              <div className="Text">Người bảo trợ cho bạn</div>
              <div className="Data">tranvanb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
