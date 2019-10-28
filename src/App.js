import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import CoursePage from './components/CoursePage/CoursePage';
import CourseDetailPage from './components/CourseDetailPage/CourseDetailPage';
import OrderPage from './components/OrderPage/OrderPage';
import ContactPage from './components/ContactPage/ContactPage';
import PaymentSuccessfulPage from './components/PaymentSuccessfulPage/PaymentSuccessfulPage';
import LoginPopup from './components/LoginPopup/LoginPopup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
function App() {
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
              <Route exact path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
        <LoginPopup />
      </div>
    </Router>
  );
}

export default App;
