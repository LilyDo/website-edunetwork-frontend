import React from 'react';
import './AccountMenuPopup.scss';
import { getTranslatedText } from '../../services/appService';

function AccountMenuPopup() {
  return (
    <div className="AccountMenuPopup">
      <div className="MenuList">
        <div className="Menu Dashboard">
          {getTranslatedText('dashboard')}
        </div>
        <div className="Menu MyProfile">
          {getTranslatedText('personal_info')}
        </div>
        <div className="Menu MyWallet">
          {getTranslatedText('my_wallet')}
        </div>
        <div className="Menu MyCourse">
          {getTranslatedText('my_course')}
        </div>
        <div className="Menu Logout">{getTranslatedText('logout')}</div>
      </div>
    </div>
  );
}

export default AccountMenuPopup;
