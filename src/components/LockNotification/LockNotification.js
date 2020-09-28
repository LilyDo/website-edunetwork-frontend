import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WithdrawNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';
import denied from '../../assets/images/denied.png';

class LockNotification extends Component {
  render() {
    let type = this.props.match.params.type || 'default';
    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>{getTranslatedText('my_wallet')}</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>{getTranslatedText('withdraw')}</div>
        </div>
        <div className="Message" style={{color: "red"}}>
          <div>
            <img src={denied} alt="" width="3%" /> {"  "}
            {getTranslatedText("banned")}
          </div>
        </div>
        <Link to={routes.accountDashboard}>
          <div
            className="BackToWallet"
          >
            <img alt="arrow back" src={ArrowBack}></img>
            <div>{getTranslatedText('back_dashboard')}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default LockNotification;
