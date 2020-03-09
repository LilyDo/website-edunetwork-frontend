import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AccountMenuPopup from '../../components/AccountMenuPopup/AccountMenuPopup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getNotifications
} from '../../actions/profile';
import {
  getUserFormLocal,
  clearLocalStorage,
  getTranslatedText,
} from '../../services/appService';
import { routes } from '../../constants';
import * as types from '../../actions';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import {get} from "lodash";

class Header extends Component {
  state = {
    isLogined: false,
    currentUser: getUserFormLocal(),
    isHamburgerMenuVisible: false,
    currentLanguage: 'en',
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.currentUser = getUserFormLocal();
      this.state.isLogined = true;
    }
  }

  doLogout = () => {
    clearLocalStorage();
  };

  toggleHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuVisible: !this.state.isHamburgerMenuVisible,
    });
  };

  selectLang(lang) {
    localStorage.setItem(types.CURRENT_LANG_KEY, lang);
    window.location.reload();
  }

  componentDidMount() {
    this.setState({
      currentLanguage:
        localStorage.getItem(types.CURRENT_LANG_KEY) || 'en',
    });
    if (getUserFormLocal()) {
      this.props.actions.getNotifications({
        token: localStorage.getItem(types.TOKEN_KEY),
      });
    }
  }
  popupNotification = () => {
    let display = document.getElementsByClassName("NotiContainer");
    if (typeof display[0] !== "undefined"){
      if (display[0].style.display === "none")
        display[0].style.display = "block";
      else
        display[0].style.display = "none";
    }
  };

  render() {
    this.checkCurrentUser();

    const { currentLanguage } = this.state;
    const { notifications } = this.props;
    console.log(notifications);

    return (
      <div className="Header">
        <div className="UpperHeader">
          <div className="HeaderSelector">
            <div className="NotificationSelector">
              <div className="NotiIcon">
                <img alt="noti-icon" src={NotiIcon} style={{cursor: "pointer"}} onClick={() => this.popupNotification()} />
                <div className="NotiNumber">0</div>
              </div>
              <div className="NotiContainer" style={{display: "none"}}>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem Unread">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem Unread">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
                <div className="NotiItem">
                  <div className="NotiTitle">
                    This is the noti title
                  </div>
                  <div className="NotiSummary">
                    This is the noti summary
                  </div>
                  <div className="NotiTimer">12/02/2020 13:55</div>
                </div>
              </div>
            </div>
            <img alt="option" src={ArrowDown} />
            <div className="LanguageSelectContainer">
              <div
                className="LanguageSelectItem"
                onClick={() => this.selectLang('en')}
              >
                {getTranslatedText('lang_en')}
              </div>
              <div
                className="LanguageSelectItem"
                onClick={() => this.selectLang('vi')}
              >
                {getTranslatedText('lang_vi')}
              </div>
            </div>
          </div>
          <div className="UpperHeaderlinks">
            <div className="NavigationContainer">
              <Link to={routes.home} className="NavigationLink">
                <span>{getTranslatedText('home')}</span>
              </Link>
              <Link to={routes.courses} className="NavigationLink">
                <span>{getTranslatedText('course')}</span>
              </Link>
              <Link to={routes.contact} className="NavigationLink">
                <span>{getTranslatedText('contact')}</span>
              </Link>
            </div>
            {!this.state.isLogined && (
              <Link to={routes.signin}>
                <div className="SignInDesktop">
                  <span>{getTranslatedText('signin')}</span>
                  <AccountMenuPopup />
                </div>
              </Link>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  alt="user profile"
                  src={
                    this.state.currentUser.avatar || DefaultUserAvatar
                  }
                />
                <div className="NameHeader">
                  {this.state.currentUser.name}
                  <img
                    className="UserArrowDown"
                    alt="option"
                    src={ArrowDown}
                  />
                </div>
                <div className="dropdown-content">
                  <Link to={routes.accountDashboard}>
                    <div>{getTranslatedText('dashboard')}</div>
                  </Link>
                  <Link to={routes.accountProfile}>
                    <div>{getTranslatedText('profile')}</div>
                  </Link>
                  <Link to={routes.accountCourses}>
                    <div>{getTranslatedText('my_course')}</div>
                  </Link>
                  <div onClick={this.doLogout.bind(this)}>
                    {getTranslatedText('logout')}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="LowerHeader">
            <div
              className="HamburgerMenu"
              onClick={this.toggleHamburgerMenu}
            >
              <img alt="menu" src={HamburgerIcon} />
            </div>
            {!this.state.isLogined && (
              <div className="SignInMobile">
                <Link to={routes.signin}>
                  <span>{getTranslatedText('signin')}</span>
                </Link>
              </div>
            )}
            {this.state.isLogined && (
              <div className="AvatarHeader">
                <img
                  alt="user profile"
                  src={
                    (this.state.currentUser &&
                      this.state.currentUser.avatar) ||
                    DefaultUserAvatar
                  }
                />
                <div className="NameHeader NameHeaderMobile">
                  {this.state.currentUser.name}
                  <img
                    className="UserArrowDown"
                    alt="option"
                    src={ArrowDown}
                  />
                </div>
                <div className="dropdown-content">
                  <Link to={routes.accountDashboard}>
                    <div>{getTranslatedText('dashboard')}</div>
                  </Link>
                  <Link to={routes.accountProfile}>
                    <div>{getTranslatedText('profile')}</div>
                  </Link>
                  <Link to={routes.accountCourses}>
                    <div>{getTranslatedText('my_course')}</div>
                  </Link>
                  <div onClick={this.doLogout}>
                    {getTranslatedText('logout')}
                  </div>
                </div>
              </div>
            )}
          </div>
          {this.state.isHamburgerMenuVisible && (
            <HamburgerMenu
              toggleHamburgerMenu={this.toggleHamburgerMenu}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  return {
    notifications: get(profile, 'notifications', {}),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      getNotifications
    }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
