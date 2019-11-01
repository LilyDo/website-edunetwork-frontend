import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChangeProfile.scss';
import DefaultUserAvatar from '../../assets/images/user_default_avatar.png';
import { getUserFormLocal } from '../../services/appService';
import { updateProfileAction } from '../../actions/profile';
import { bindActionCreators } from 'redux';

class ChangeProfile extends Component {
  state = {
    isLogined: false,
    currentUser: {},
    fullName: '',
    oldPassword: '',
    newPassword: '',
    cfPassword: '',
    phone: '',
    avatar: null,
    token: '',
  };

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.isLogined = true;
      this.state.currentUser = getUserFormLocal();
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleImageChange = e => {
    let file = URL.createObjectURL(e.target.files[0]);
    const { name } = e.target;
    this.setState({
      [name]: file,
    });
  };

  onUpdateProfile = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    this.props.actions.updateProfileAction(formData);
  };

  componentDidMount() {
    this.setState({
      fullName: this.state.currentUser.name,
      phone: this.state.currentUser.phone,
      avatar: this.state.currentUser.avatar,
      token: localStorage.getItem('token'),
    });
  }

  render() {
    this.checkCurrentUser();

    return (
      <form
        onSubmit={this.onUpdateProfile}
        className="cn-register__wapper"
        method="POST"
      >
        <div className="ChangeProfile">
          <div className="Title">Personal Information</div>
          <div className="Profile">
            <div className="Avatar">
              <img
                className="Photo"
                alt="avatar"
                src={
                  this.state.avatar
                    ? this.state.avatar
                    : this.state.currentUser.avatar ||
                      DefaultUserAvatar
                }
              ></img>
              <div>
                <div className="ChangePhotoText">Update avatar</div>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  name="avatar"
                  onChange={this.handleImageChange}
                />
              </div>
            </div>
            <div className="GroupProfile">
              <div className="GroupProfile1">
                <div className="Fullname">
                  <div className="Text">Full Name</div>
                  <input
                    type="text"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.handleChange('fullName')}
                  ></input>
                </div>
                <div className="Email">
                  <div className="Text">Email</div>
                  <input
                    type="text"
                    value={this.state.currentUser.email}
                    disabled
                  ></input>
                </div>
                <div className="PhoneNumber">
                  <div className="Text">Phone Number</div>
                  <input
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange('phone')}
                  ></input>
                </div>
              </div>
              <div className="GroupProfile2">
                <div className="Password">
                  <div className="Text">Password</div>
                  <input
                    type="password"
                    name="old_password"
                    value={this.state.oldPassword}
                    onChange={this.handleChange('oldPassword')}
                  ></input>
                </div>
                <div className="NewPassword">
                  <div>
                    <div className="Text">New Password</div>
                    <input
                      type="password"
                      name="new_password"
                      value={this.state.newPassword}
                      onChange={this.handleChange('newPassword')}
                    ></input>
                  </div>
                  <div>
                    <div className="Text">Re New Password</div>
                    <input
                      type="password"
                      name="cf_password"
                      value={this.state.cfPassword}
                      onChange={this.handleChange('cfPassword')}
                    ></input>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="token"
                      value={this.state.token}
                      hidden
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ButtonContainer">
            <div
              className="CancelButton"
              onClick={this.props.onCancel}
            >
              CANCEL
            </div>
            <input
              className="UpdateButton"
              type="submit"
              value="UPDATE"
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(
      {
        updateProfileAction,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeProfile);
