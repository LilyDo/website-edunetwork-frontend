import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WithdrawNotification.scss';
import ArrowRight from '../../assets/images/icon_arrow_right.svg';
import ArrowBack from '../../assets/images/icon_arrow_back.svg';
import { routes } from '../../constants';
import { getTranslatedText } from '../../services/appService';

class WithdrawNotification extends Component {
  render() {
    let type = this.props.match.params.type || 'default';
    return (
      <div className="WithdrawNotification">
        <div className="Title">
          <div>{getTranslatedText('my_wallet')}</div>
          <img alt="arrow right" src={ArrowRight}></img>
          <div>{getTranslatedText('withdraw')}</div>
        </div>
        <div className="Message">
          <div>
            {type == 'contract'
              ? getTranslatedText('post_contract_success_msg')
              : getTranslatedText('success_withdraw')}
          </div>
        </div>
        <Link to={routes.accountWallet}>
          <div
            className="BackToWallet"
            onClick={this.props.onGoBackClick}
          >
            <img alt="arrow back" src={ArrowBack}></img>
            <div>{getTranslatedText('back_wallet')}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default WithdrawNotification;
