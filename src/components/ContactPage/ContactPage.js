import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ContactPage.scss';
import { sendContactAction } from '../../actions/contact';
import { keys } from '../../constants';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

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
              <div>Contact Edunetwork</div>
              <div className="Name">
                <div>Your name*</div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={this.handleChange('name')}
                  required
                />
              </div>
              <div className="Email">
                <div>Email*</div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={this.handleChange('email')}
                  required
                />
              </div>
              <div className="Phone">
                <div>Phone Number</div>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={this.handleChange('phone')}
                />
              </div>
              <div className="Text">
                <div>Text*</div>
                <textarea
                  placeholder="Let us know what do you think"
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
            SEND
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
