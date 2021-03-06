import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import courses from './courses';
import contact from './contact';

export default combineReducers({
  auth,
  profile,
  courses,
  contact,
});
