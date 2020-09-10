import axios from 'axios';
import {
  BASE_URL,
  TOKEN_KEY,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_COURSE_DETAIL_REQUEST,
  GET_COURSE_DETAIL_SUCCESS,
  GET_COURSE_DETAIL_FAILURE,
  GET_USER_COURSES_REQUEST,
  GET_USER_COURSES_SUCCESS,
  GET_USER_COURSES_FAILURE,
  GET_USER_COURSE_DETAIL_REQUEST,
  GET_USER_COURSE_DETAIL_SUCCESS,
  GET_USER_COURSE_DETAIL_FAILURE,
  BUY_COURSE_REQUEST,
  BUY_COURSE_SUCCESS,
  BUY_COURSE_FAILURE,
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
  DEPOSIT_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
} from './index';
import { headerLang } from '../constants';

/**
 * +-------------+
 * | GET COURSES |
 * +-------------+
 */
export const getCoursesAction = () => {
  return dispatch => {
    dispatch(getCoursesRequest());

    axios
      .get(`${BASE_URL}/courses`, headerLang)
      .then(response => dispatch(getCoursesSuccess(response.data)))
      .catch(error => dispatch(getCoursesFailure(error.message)));
  };
};

const getCoursesRequest = () => ({
  type: GET_COURSES_REQUEST,
  payload: {},
});

const getCoursesSuccess = response => ({
  type: GET_COURSES_SUCCESS,
  payload: { ...response },
});

const getCoursesFailure = error => ({
  type: GET_COURSES_FAILURE,
  payload: { error },
});

/**
 * +-------------------+
 * | GET COURSE DETAIL |
 * +-------------------+
 */
export const getCourseDetailAction = courseId => {
  return dispatch => {
    dispatch(getCourseDetailRequest());

    axios
      .get(`${BASE_URL}/courses/${courseId}`, headerLang)
      .then(response =>
        dispatch(getCourseDetailSuccess(response.data)),
      )
      .catch(error =>
        dispatch(getCourseDetailFailure(error.response)),
      );
  };
};

const getCourseDetailRequest = () => ({
  type: GET_COURSE_DETAIL_REQUEST,
  payload: {},
});

const getCourseDetailSuccess = response => ({
  type: GET_COURSE_DETAIL_SUCCESS,
  payload: { ...response },
});

const getCourseDetailFailure = error => ({
  type: GET_COURSE_DETAIL_FAILURE,
  payload: { error },
});

/**
 * +--------------------+
 * | GET USER'S COURSES |
 * +--------------------+
 */
export const getUserCoursesAction = () => {
  return dispatch => {
    dispatch(getUserCoursesRequest());

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(`${BASE_URL}/users/courses`, { token: token }, headerLang)
      .then(response =>
        dispatch(getUserCoursesSuccess(response.data)),
      )
      .catch(error => dispatch(getUserCoursesFailure(error.message)));
  };
};

const getUserCoursesRequest = () => ({
  type: GET_USER_COURSES_REQUEST,
  payload: {},
});

const getUserCoursesSuccess = response => ({
  type: GET_USER_COURSES_SUCCESS,
  payload: { ...response },
});

const getUserCoursesFailure = error => ({
  type: GET_USER_COURSES_FAILURE,
  payload: { error },
});

/**
 * +--------------------------+
 * | GET USER'S COURSE DETAIL |
 * +--------------------------+
 */
export const getUserCourseDetailAction = courseId => {
  return dispatch => {
    dispatch(getUserCourseDetailRequest(courseId));

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(
        `${BASE_URL}/users/courses/${courseId}`,
        { token: token },
        headerLang,
      )
      .then(response =>
        dispatch(getUserCourseDetailSuccess(response.data)),
      )
      .catch(error =>
        dispatch(getUserCourseDetailFailure(error.response)),
      );
  };
};

const getUserCourseDetailRequest = id => ({
  type: GET_USER_COURSE_DETAIL_REQUEST,
  payload: {},
});

const getUserCourseDetailSuccess = response => ({
  type: GET_USER_COURSE_DETAIL_SUCCESS,
  payload: { ...response },
});

const getUserCourseDetailFailure = error => ({
  type: GET_USER_COURSE_DETAIL_FAILURE,
  payload: { error },
});

/**
 * +------------+
 * | BUY COURSE |
 * +------------+
 */
export const buyCourseAction = (
  courseId,
  method = 'vn-banking',
  paypal_order = '',
) => {
  return dispatch => {
    dispatch(buyCourseRequest(courseId));

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(
        `${BASE_URL}/users/buying-course`,
        {
          course_id: courseId,
          method: method,
          token: token,
          paypal_order_id: paypal_order,
        },
        headerLang,
      )
      .then(response => {
        dispatch(buyCourseSuccess(response.data));
      })
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

export const updateOrderAction = payload => {
  return dispatch => {
    dispatch(updateOrderRequest(payload));

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(
        `${BASE_URL}/users/update-order`,
        {
          token: token,
          order_code: payload.order_code,
          method: payload.method,
          status: payload.status,
        },
        headerLang,
      )
      .then(response => {
        dispatch(updateOrderSuccess(response.data));
      })
      .catch(error => dispatch(updateOrderFailure(error.message)));
  };
};

const updateOrderRequest = payload => ({
  type: UPDATE_ORDER_REQUEST,
  payload: payload,
});

const updateOrderSuccess = payload => ({
  type: UPDATE_ORDER_SUCCESS,
  payload: payload,
});

const updateOrderFailure = payload => ({
  type: UPDATE_ORDER_FAILURE,
  payload: { payload },
});

/**
 * +---------+
 * | DEPOSIT |
 * +---------+
 */
export const depositAction = amount => {
  return dispatch => {
    dispatch(depositRequest(amount));

    const token = localStorage.getItem(TOKEN_KEY);
    axios
      .post(
        `${BASE_URL}/users/recharge`,
        {
          price: amount,
          token: token,
        },
        headerLang,
      )
      .then(response => {
        dispatch(depositSuccess(response.data));
      })
      .catch(error => dispatch(depositFailure(error.message)));
  };
};

const depositRequest = amount => ({
  type: DEPOSIT_REQUEST,
  payload: { amount: amount },
});

const depositSuccess = response => ({
  type: DEPOSIT_SUCCESS,
  payload: { ...response },
});

const depositFailure = error => ({
  type: DEPOSIT_FAILURE,
  payload: { error },
});
