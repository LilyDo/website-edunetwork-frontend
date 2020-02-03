import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ContactPage.scss';
import { sendContactAction } from '../../actions/contact';
import { keys } from '../../constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { getTranslatedText } from '../../services/appService';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    recaptcha: '',
  };

  sendContact = () => {
    if (
      this.state.name &&
      this.state.email &&
      this.state.message &&
      this.state.recaptcha
    ) {
      let payload = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
        recaptcha: this.state.recaptcha,
      };

      this.props.actions.sendContactAction(payload);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  setCaptcha = value => {
    this.setState({
      recaptcha: value,
    });
  };

  render() {
    const { name, email, phone, message } = this.state;

    return (
      <div>
        <div className="ContactPage">
          <div className="ContentContainer">
            <div className="ContactInfo">
              <div>{getTranslatedText('contact_edunetwork')}</div>
              <div className="Name">
                <div>{getTranslatedText('your_name')}</div>
                <input
                  type="text"
                  placeholder={getTranslatedText('input_your_name')}
                  value={name}
                  onChange={this.handleChange('name')}
                  required
                />
              </div>
              <div className="Email">
                <div>Email*</div>
                <input
                  type="email"
                  placeholder={getTranslatedText('input_your_email')}
                  value={email}
                  onChange={this.handleChange('email')}
                  required
                />
              </div>
              <div className="Phone">
                <div>{getTranslatedText('your_phone')}</div>
                <input
                  type="tel"
                  placeholder={getTranslatedText('input_your_phone')}
                  value={phone}
                  onChange={this.handleChange('phone')}
                />
              </div>
              <div className="Text">
                <div>{getTranslatedText('text')}</div>
                <textarea
                  placeholder={getTranslatedText('let_us_know')}
                  value={message}
                  onChange={this.handleChange('message')}
                  required
                ></textarea>
              </div>
              <ReCAPTCHA
                sitekey={keys.googleRecaptchaSiteKey}
                onChange={this.setCaptcha}
              />
            </div>

            <div className="LogoContainer"></div>
          </div>
          <div className="SendContact" onClick={this.sendContact}>
            {getTranslatedText('SEND')}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        sendContactAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ContactPage);
