import axios from 'axios';
import {
  BASE_URL,
  TOKEN_KEY,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILURE,
  BUY_COURSE_REQUEST,
  BUY_COURSE_SUCCESS,
  BUY_COURSE_FAILURE,
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

export const buyCourseAction = courseId => {
  return dispatch => {
    dispatch(buyCourseRequest(courseId));

    axios
      .post(`${BASE_URL}/users/buying-course`, {
        token: localStorage.getItem(TOKEN_KEY),
        course_id: courseId,
      })
      .then(response => dispatch(buyCourseSuccess(response.data)))
      .catch(error => dispatch(buyCourseFailure(error.message)));
  };
};

const buyCourseRequest = courseId => ({
  type: BUY_COURSE_REQUEST,
  payload: { course_id: courseId },
});

const buyCourseSuccess = response => ({
  type: BUY_COURSE_SUCCESS,
  payload: { ...response },
});

const buyCourseFailure = error => ({
  type: BUY_COURSE_FAILURE,
  payload: { error },
});
