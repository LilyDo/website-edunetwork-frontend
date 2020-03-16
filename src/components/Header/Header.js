import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import ArrowDown from '../../assets/images/icon_select.svg';
import HamburgerIcon from '../../assets/images/icon_hamburger.svg';
import NotiIcon from '../../assets/images/notification-outline-white.png';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import AccountMenuPopup from '../../components/AccountMenuPopup/AccountMenuPopup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getNotifications,
  viewNotification,
} from '../../actions/profile';
import {
  getUserFormLocal,
  clearLocalStorage,
  getTranslatedText,
} from '../../services/appService';
import { routes } from '../../constants';
import * as types from '../../actions';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import { get } from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

function NotificationDetailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.currentnoti.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          dangerouslySetInnerHTML={{
            __html: props.currentnoti.content,
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Header extends Component {
  state = {
    isLogined: false,
    currentUser: getUserFormLocal(),
    isHamburgerMenuVisible: false,
    currentLanguage: 'en',
    modalShow: false,
    currentNoti: {},
    isShowNotiContainer: false,
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
      this.props.actions.getNotifications(1);
    }
  }

  popupNotification = () => {
    this.setState({
      isShowNotiContainer: !this.state.isShowNotiContainer,
    });
  };

  loadMoreNotifications = () => {
    this.props.actions.getNotifications(
      this.props.notificationCurrentPage + 1,
    );
  };

  setModalShow = (currentNoti, prop) => {
    this.setState({ currentNoti: currentNoti, modalShow: prop });
    if (prop) {
      this.props.actions.viewNotification(currentNoti.id || 1);
    }
  };

  render() {
    this.checkCurrentUser();

    const {
      currentLanguage,
      modalShow,
      currentNoti,
      isShowNotiContainer,
    } = this.state;
    const {
      notificationLst,
      notificationCurrentPage,
      notificationLastPage,
      unreadNotification,
    } = this.props;

    return (
      <div className="Header">
        <div className="UpperHeader">
          <div className="HeaderSelector">
            <div className="NotificationSelector">
              <div className="NotiIcon">
                <img
                  alt="noti-icon"
                  src={NotiIcon}
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.popupNotification()}
                />
                <div className="NotiNumber">{unreadNotification}</div>
              </div>
              {isShowNotiContainer && (
                <div className="NotiContainer">
                  <InfiniteScroll
                    pageStart={1}
                    loadMore={this.loadMoreNotifications}
                    hasMore={
                      notificationCurrentPage < notificationLastPage
                    }
                    loader={
                      <div className="loader" key={0}>
                        Loading ...
                      </div>
                    }
                    useWindow={false}
                  >
                    {notificationLst.map(noti => (
                      <div
                        key={noti.id}
                        className={
                          'NotiItem' + (noti.seen ? '' : ' Unread')
                        }
                        onClick={() => this.setModalShow(noti, true)}
                      >
                        <div className="NotiTitle">{noti.title}</div>
                        <div className="NotiSummary">
                          {noti.summary}
                        </div>
                        <div className="NotiTimer">
                          {noti.created_at}
                        </div>
                      </div>
                    ))}
                  </InfiniteScroll>
                </div>
              )}
            </div>

            <div className="LanguageSelector">
              <div className="text">
                {currentLanguage === 'en'
                  ? getTranslatedText('lang_en')
                  : getTranslatedText('lang_vi')}
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

        <NotificationDetailModal
          show={modalShow}
          currentnoti={currentNoti}
          onHide={() => this.setModalShow({}, false)}
        />

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
    notificationLst: get(profile, 'notificationLst', []),
    notificationCurrentPage: get(profile, 'notificationCurrentPage'),
    notificationLastPage: get(profile, 'notificationLastPage'),
    unreadNotification: get(profile, 'unreadNotification'),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        getNotifications,
        viewNotification,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
