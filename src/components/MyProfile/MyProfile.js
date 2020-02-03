import React, { Component } from 'react';
import './MyProfile.scss';
import EditIcon from '../../assets/images/icon_edit.svg';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import {
  getTranslatedText,
  getUserFormLocal,
} from '../../services/appService';
import { USER_WEBSITE_URL } from '../../actions/index';
import { routes } from '../../constants';

class MyProfile extends Component {
  state = {
    isLogined: false,
    currentUser: {},
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.isLogined = true;
      this.state.currentUser = getUserFormLocal();
    }
  }

  render() {
    this.checkCurrentUser();

    return (
      <div className="MyProfile">
        <div className="Title">{getTranslatedText('my_wallet')}</div>
        <div className="Profile">
          <img
            className="EditIcon"
            alt="edit"
            src={EditIcon}
            onClick={this.props.toggleEditProfileForm}
          ></img>
          <div className="Avatar">
            <img
              className="Photo"
              alt="avatar"
              src={this.state.currentUser.avatar || DefaultUserAvatar}
            ></img>
            <div>{this.state.currentUser.name}</div>
          </div>
          <div className="GroupProfile">
            <div className="Fullname">
              <div className="Text">
                {getTranslatedText('full_name')}
              </div>
              <div className="Data">
                {this.state.currentUser.name}
              </div>
            </div>
            <div className="Email">
              <div className="Text">Email</div>
              <div className="Data">
                {this.state.currentUser.email}
              </div>
            </div>
            <div className="PhoneNumber">
              <div className="Text">
                {getTranslatedText('your_phone')}
              </div>
              <div className="Data">
                {this.state.currentUser.phone}
              </div>
            </div>
            <div className="Country">
              <div className="Text">
                {getTranslatedText('Country')}
              </div>
              <div className="Data">
                {this.state.currentUser.country}
              </div>
            </div>

            <div className="ReferralCode">
              <div className="Text">
                {getTranslatedText('ref_code')}
              </div>
              <div className="Data">
                {this.state.currentUser.code}
              </div>
            </div>
            <div className="Password">
              <div className="Text">
                {getTranslatedText('ref_link')}
              </div>
              <div className="Data">
                {`${USER_WEBSITE_URL}${routes.signin}?refUser=${this.state.currentUser.code}`}
              </div>
            </div>
            <div className="Sponsor">
              <div className="Text">
                {getTranslatedText('your_ref')}
              </div>
              <div className="Data">
                {this.state.currentUser.presenter_code}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
