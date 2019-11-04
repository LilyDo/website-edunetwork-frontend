import * as types from '../actions';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { routes, toastDuration } from '../constants';

const initialState = {
  loading: false,
  courses: [],
  courseDetail: {},
  userCourses: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload.data,
      };
    case types.GET_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.GET_USER_COURSE_DETAIL_REQUEST:
    case types.GET_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_COURSE_DETAIL_SUCCESS:
    case types.GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetail: action.payload.data,
      };
    case types.GET_USER_COURSE_DETAIL_FAILURE:
    case types.GET_COURSE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.GET_USER_COURSES_REQUEST:
      return {
        ...state,
        isloading: true,
      };
    case types.GET_USER_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        userCourses: action.payload.data,
      };
    case types.GET_USER_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.BUY_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.BUY_COURSE_SUCCESS:
      let message = '';
      let pathname = '';

      if (action.payload.shouldDepositAmount > 0) {
        message = 'Request course successfully!';
        pathname = routes.coursePaymentSuccessful.replace(
          ':status',
          'failed',
        );
      } else {
        message = 'Buy course successfully!';
        pathname = routes.coursePaymentSuccessful.replace(
          ':status',
          'successful',
        );
      }

      toast.success(message, {
        autoClose: toastDuration,
      });
      setTimeout(function() {
        window.location.pathname = pathname;
      }, toastDuration);

      return {
        ...state,
        loading: false,
      };
    case types.BUY_COURSE_FAILURE:
      toast.error(
        get(action, 'payload.error', 'Buy course failed!'),
        {
          autoClose: toastDuration,
        },
      );
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.DEPOSIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DEPOSIT_SUCCESS:
      window.location = action.payload.data.url;
      return {
        ...state,
        loading: false,
      };
    case types.DEPOSIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
