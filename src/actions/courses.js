import axios from 'axios';
import {
  BASE_URL,
  TOKEN_KEY,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_COURSE_FAILURE,
  GET_USER_COURSESS_REQUEST,
  GET_USER_COURSESS_SUCCESS,
  GET_USER_COURSESS_FAILURE,
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

export const getUserCoursesAction = () => {
  return dispatch => {
    dispatch(getUserCoursesRequest());

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(`${BASE_URL}/users/courses?token=${token}`)
      .then(response =>
        dispatch(getUserCoursesSuccess(response.data)),
      )
      .catch(error => dispatch(getUserCoursesFailure(error.message)));
  };
};

const getUserCoursesRequest = () => ({
  type: GET_USER_COURSESS_REQUEST,
  payload: {},
});

const getUserCoursesSuccess = response => ({
  type: GET_USER_COURSESS_SUCCESS,
  payload: { ...response },
});

const getUserCoursesFailure = error => ({
  type: GET_USER_COURSESS_FAILURE,
  payload: { error },
});

export const buyCourseAction = courseId => {
  return dispatch => {
    dispatch(buyCourseRequest(courseId));

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(
        `${BASE_URL}/users/buying-course?course_id=${courseId}&token=${token}`,
      )
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
