import axios from 'axios';
import {
  BASE_URL,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILURE,
} from './index';

export const getCourseAction = () => {
  return dispatch => {
    dispatch(getCourseRequest());

    axios
      .get(`${BASE_URL}/courses`)
      .then(response => dispatch(getCourseSuccess(response.data)))
      .catch(error => dispatch(getCourseFailure(error.message)));
  };
};

const getCourseRequest = () => ({
  type: GET_COURSE_REQUEST,
  payload: {},
});

const getCourseSuccess = response => ({
  type: GET_COURSE_SUCCESS,
  payload: { ...response },
});

const getCourseFailure = error => ({
  type: GET_COURSE_FAILURE,
  payload: { error },
});
