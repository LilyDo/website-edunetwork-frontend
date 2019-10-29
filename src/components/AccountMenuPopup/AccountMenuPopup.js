import React from 'react';
import './AccountMenuPopup.scss';

function AccountMenuPopup() {
  return (
    <div className="AccountMenuPopup">
      <div className="MenuList">
        <div className="Menu Dashboard">Dashboard</div>
        <div className="Menu MyProfile">Thông tin cá nhân</div>
        <div className="Menu MyWallet">Thông tin ví của tôi</div>
        <div className="Menu MyCourse">Khóa học của tôi</div>
      </div>
      <div className="Logout">Đăng xuất</div>
    </div>
  );
}

export default AccountMenuPopup;
