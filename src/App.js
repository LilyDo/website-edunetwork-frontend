import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import CoursePage from './components/CoursePage/CoursePage';
import CourseDetail from './components/CourseDetail/CourseDetail';
import ContactPage from './components/ContactPage/ContactPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
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
              <CourseDetail />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
