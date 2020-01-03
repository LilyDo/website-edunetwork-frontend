import * as types from '../actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { routes, toastDuration } from '../constants';
import { clearLocalStorage } from '../services/appService';

const initialState = {
  loading: false,
  courses: [],
  courseDetail: {},
  userCourses: [],
  error: null,
  orderObj: {},
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
      if (get(action, 'payload.statusCode', 0) >= 400) {
        clearLocalStorage();
        return;
      }
      return {
        ...state,
        loading: false,
        courseDetail: action.payload.data,
      };
    case types.GET_USER_COURSE_DETAIL_FAILURE:
    case types.GET_COURSE_DETAIL_FAILURE:
      if (get(action, 'payload.error.status', 0) >= 400) {
        clearLocalStorage();
      }
      return {
        ...state,
        loading: false,
        error: action.payload.error.message,
      };
    case types.GET_USER_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
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
      let orderObj = {};
      if (action.payload.shouldDepositAmount > 0) {
        orderObj = action.payload.data || {};
        message = 'Request course successfully!';
        pathname = routes.accountDepositNoti
          .replace(':isBuyCourse', 'buy')
          .replace(':code', orderObj.payment_code)
          .replace(':amount', orderObj.amount_need);
      } else {
        message = 'Buy course successfully!';
        pathname = routes.coursePaymentSuccessful.replace(
          ':status',
          'successful',
        );
      }

      toast.success(message);
      setTimeout(function() {
        window.location.pathname = pathname;
      }, toastDuration);

      return {
        ...state,
        loading: false,
        orderObj: orderObj,
      };
    case types.BUY_COURSE_FAILURE:
      toast.error('The account is locked for transactions!');
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // GET ORDER DETAIL BY CODE
    case types.GET_ORDER_DETAIL_BY_CODE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ORDER_DETAIL_BY_CODE_SUCCESS:
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        orderObj = action.payload.data || {};
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        orderObj: orderObj,
      };

    case types.GET_ORDER_DETAIL_BY_CODE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // DEPOSIT REQUEST
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
