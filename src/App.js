// vendor
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// custom
import './App.scss';
import { routes, toastDuration } from './constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import CoursePage from './components/CoursePage/CoursePage';
import CourseDetailPage from './components/CourseDetailPage/CourseDetailPage';
import OrderPage from './components/OrderPage/OrderPage';
import ContactPage from './components/ContactPage/ContactPage';
import PaymentSuccessfulPage from './components/PaymentSuccessfulPage/PaymentSuccessfulPage';
import SigninPage from './components/SigninPage/SigninPage';
import ResetPassword from './components/ResetPassword/ResetPassword';
import AccountDashboardPage from './components/AccountDashboardPage/AccountDashboardPage';
import AccountProfilePage from './components/AccountProfilePage/AccountProfilePage';
import MyWallet from './components/MyWallet/MyWallet';
import MyWallet_Withdraw from './components/MyWallet_Withdraw/MyWallet_Withdraw';
import RequestDeposit from './components/RequestDeposit/RequestDeposit';
import WithdrawNotification from './components/WithdrawNotification/WithdrawNotification';
import AccountCoursePage from './components/AccountCoursePage/AccountCoursePage';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ForgotPasswordPopup from './components/ForgotPasswordPopup/ForgotPasswordPopup';
import SignupVerify from './components/SignupVerify/SignupVerify';
import SignupPendingVerify from './components/SignupPendingVerify/SignupPendingVerify';
import SendContactSuccessful from './components/SendContactSuccessful/SendContactSuccessful';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';
import MainGame from '../src/components/Game/MainGame/MainGame';
import QuizContainer from '../src/containers/Quiz/Quiz';
// services
import { getUserFormLocal } from './services/appService';
import DepositNotification from './components/DepositNotification/DepositNotification';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermOfService from './components/TermOfService/TermOfService';
import VisaPaymentComponent from "./components/VisaPaymentComponent/VisaPaymentComponent";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routes.signin,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  state = {
    isLogined: false,
  };

  componentDidMount() {
    toast.configure({
      autoClose: toastDuration,
    });
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
      <LoadingOverlay
        active={this.props.loading}
        spinner={<ScaleLoader />}
      >
        <Router>
          <ToastContainer />
          <div className="App">
            <div className="HeaderContentContainer">
              <Header />
              <div className="Content">
                <Switch>
                  <Route exact path={routes.game}>
                    <MainGame />
                  </Route>
                  <Route exact path={routes.home}>
                    <HomePage />
                  </Route>
                  <Route exact path={routes.courses}>
                    <CoursePage />
                  </Route>
                  {/* this should be declared before courseDetail or "paymentsucessful" will become the id param */}
                  <Route exact path={routes.coursePaymentSuccessful}>
                    <PaymentSuccessfulPage />
                  </Route>
                  {/* this should be declared before courseDetail or "order" will become the id param */}
                  <Route exact path={routes.courseOrder}>
                    <OrderPage />
                  </Route>
                  <Route exact path={routes.courseDetail}>
                    <ScrollToTop>
                      <CourseDetailPage />
                    </ScrollToTop>
                  </Route>
                  <Route exact path={routes.signin}>
                    <SigninPage />
                  </Route>
                  <Route exact path={routes.verify}>
                    <SignupVerify />
                  </Route>
                  <Route exact path={routes.registerPendingActive}>
                    <SignupPendingVerify />
                  </Route>
                  <Route path={routes.resetPassword}>
                    <ResetPassword />
                  </Route>
                  <Route exact path={routes.sendContactSuccessful}>
                    <SendContactSuccessful />
                  </Route>
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountDashboard}
                    component={AccountDashboardPage}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountProfile}
                    component={AccountProfilePage}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountWallet}
                    component={MyWallet}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.visaPayment}
                    component={VisaPaymentComponent}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountWithdraw}
                    component={MyWallet_Withdraw}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountDeposit}
                    component={RequestDeposit}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountWithdrawNoti}
                    component={WithdrawNotification}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountDepositNoti}
                    component={DepositNotification}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.accountCourses}
                    component={AccountCoursePage}
                  />
                  <PrivateRoute
                    authed={this.state.isLogined}
                    exact
                    path={routes.quiz.main}
                    component={QuizContainer}
                  />
                  <Route exact path={routes.contact}>
                    <ContactPage />
                  </Route>
                  <Route exact path={routes.privacyPolicy}>
                    <PrivacyPolicy />
                  </Route>
                  <Route exact path={routes.termOfService}>
                    <TermOfService />
                  </Route>
                </Switch>
              </div>
            </div>
            <Footer />
            <LoginPopup />
            {this.props.isForgotPasswordPopupShown && (
              <ForgotPasswordPopup />
            )}
          </div>
        </Router>
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = state => ({
  loading:
    state.auth.loading ||
    state.profile.loading ||
    state.courses.loading ||
    state.contact.loading,
  isForgotPasswordPopupShown: state.auth.isForgotPasswordPopupShown,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
