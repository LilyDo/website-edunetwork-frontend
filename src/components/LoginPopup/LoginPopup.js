import React from 'react';
import './LoginPopup.scss';
import CancelButton from '../../assets/images/icon_cancel.svg';
import { getTranslatedText } from '../../services/appService';

function LoginPopup() {
  return (
    <div className="LoginOverlay">
      <div className="LoginPopup">
        <div className="CancelButton">
          <img alt="cancel" src={CancelButton}></img>
        </div>
        <div>{getTranslatedText('login_payment')}</div>

        <div className="Container">
          <div className="Signin">
            <div className="Title">
              <div>
                <span>{getTranslatedText('login')}</span>
              </div>
              <div>{getTranslatedText('is_member')}</div>
            </div>
            <div className="Email">
              <span>Email</span>
              <input type="text"></input>
            </div>
            <div className="Password">
              <span>{getTranslatedText('password')}</span>
              <input type="text"></input>
            </div>
            <div className="ForgotPassword">
              {getTranslatedText('forgot_password')}
            </div>
            <div className="SigninButton">
              {getTranslatedText('login')}
            </div>
          </div>

          <div className="Signup">
            <div className="Title">
              <div>
                <span>{getTranslatedText('register')}</span>
              </div>
              <div>{getTranslatedText('for_new_member')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
