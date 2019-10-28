// vendor
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// custom
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import CoursePage from './components/CoursePage/CoursePage';
import CourseDetailPage from './components/CourseDetailPage/CourseDetailPage';
import OrderPage from './components/OrderPage/OrderPage';
import ContactPage from './components/ContactPage/ContactPage';
import LoginPopup from './components/LoginPopup/LoginPopup';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
              <Route exact path="/contact">
                <ContactPage />
              </Route>
            </Switch>
          </div>
          <Footer />
          <LoginPopup />
        </div>
      </Router >
    );
  }
}

export default App;
