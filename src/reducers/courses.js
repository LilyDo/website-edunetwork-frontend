import * as types from '../actions';
import { toast } from 'react-toastify';
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
    case types.GET_USER_COURSESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_COURSESS_SUCCESS:
      return {
        ...state,
        loading: false,
        userCourses: action.payload.data,
      };
    case types.GET_USER_COURSESS_FAILURE:
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
      toast.success('Buy course successfully!', {
        autoClose: toastDuration,
      });
      setTimeout(function() {
        window.location.pathname = routes.coursePaymentSuccessful;
      }, toastDuration);

      return {
        ...state,
        loading: false,
      };
    case types.BUY_COURSE_FAILURE:
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
