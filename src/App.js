// vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// custom
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import CoursePage from './components/CoursePage/CoursePage';
import CourseDetailPage from './components/CourseDetailPage/CourseDetailPage';
import OrderPage from './components/OrderPage/OrderPage';
import ContactPage from './components/ContactPage/ContactPage';
import PaymentSuccessfulPage from './components/PaymentSuccessfulPage/PaymentSuccessfulPage';
import SigninPage from './components/SigninPage/SigninPage';
import AccountDashboardPage from './components/AccountDashboardPage/AccountDashboardPage';
import AccountProfilePage from './components/AccountProfilePage/AccountProfilePage';
import AccountCoursePage from './components/AccountCoursePage/AccountCoursePage';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ForgotPasswordPopup from './components/ForgotPasswordPopup/ForgotPasswordPopup';

// services
import { getUserFormLocal } from './services/appService';


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
    />
  )
}

class App extends Component {
  state = {
    isLogined : false
  }

  checkCurrentUser() {
    if (getUserFormLocal()) {
      this.state.isLogined = true;
      this.state.currentUser = getUserFormLocal();
    }
  }

  render() {
    this.checkCurrentUser();

    return (
      <Router>
        <div className="App">
          <div className="HeaderContentContainer">
            <Header />
            <div className="Content">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/courses">
                  <CoursePage />
                </Route>
                <Route exact path="/courses/detail">
                  <CourseDetailPage />
                </Route>
                <Route exact path="/courses/order">
                  <OrderPage />
                </Route>
                <Route exact path="/courses/paymentsucessful">
                  <PaymentSuccessfulPage />
                </Route>
                <Route exact path="/signin">
                  <SigninPage />
                </Route>
                <Route exact path="/account/dashboard">
                  <AccountDashboardPage />
                </Route>
                <PrivateRoute authed={this.state.isLogined} exact path="/account/profile" component={AccountProfilePage} />
                <Route exact path="/account/course">
                  <AccountCoursePage />
                </Route>
                <Route exact path="/contact">
                  <ContactPage />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
          <LoginPopup />
          <ToastContainer />
          <ForgotPasswordPopup />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});
const mapDispatchToProps = dispatch => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
