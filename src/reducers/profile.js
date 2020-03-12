import * as types from '../actions';
import { toast } from 'react-toastify';
import { routes, toastDuration } from '../constants';
import {
  extractAndShoweErrorMessages,
  checkSessionLogout, getTranslatedText,
} from '../services/appService';

const initialState = {
  loading: false,
  data: {},
  error: null,
  isEditing: false,
  withdrawList: [],
  chargeList: [],
  dashboard: {},
  timeStamp: Date.now(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    // GET CURRENT USER PROFILE
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_PROFILE_SUCCESS:
      if (
        action.payload.data.statusCode === 200 &&
        action.payload.data.errors.length === 0
      ) {
        let currentUser = action.payload.data.data;
        localStorage.setItem(
          types.CURRENT_USER_KEY,
          JSON.stringify(currentUser),
        );
        if (
          action.payload &&
          action.payload.options &&
          action.payload.options.redirect
        ) {
          setTimeout(function() {
            window.location.pathname = `${routes.accountDashboard}`;
          }, 500);
        }
      } else {
        toast.error(
          (action.payload.data && action.payload.data.message) || '',
        );
      }

      checkSessionLogout(
        (action.payload.data &&
          action.payload.data.data &&
          action.payload.data.data.action) ||
          '',
      );

      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data.data,
        timeStamp: Date.now(),
      };

    case types.GET_PROFILE_FAILURE:
      // localStorage.removeItem(types.TOKEN_KEY);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // UPDATE CURRENT USER PROFILE
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        isEditing: true,
      };

    case types.UPDATE_PROFILE_SUCCESS:
      state.isEditing = false;
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        toast.success(getTranslatedText("update_profile_success"));
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.UPDATE_PROFILE_FAILURE:
      toast.error('Cannot update profile');

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // SHOW UPDATE FORM
    case types.SHOW_UPDATE_FORM:
      return {
        ...state,
        isEditing: !state.isEditing,
      };

    // GET CHARGE HISTORY
    case types.GET_CHARGE_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_CHARGE_HISTORY_SUCCESS:
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        return {
          ...state,
          loading: false,
          withdrawList: action.payload.data.draw,
          chargeList: action.payload.data.charge,
        };
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_CHARGE_HISTORY_FAILURE:
      toast.error('Cannot get charge history');
      return {
        ...state,
        loading: false,
      };

    // WITHDRAW MONEY
    case types.WITHDRAW_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.WITHDRAW_MONEY_SUCCESS:
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        toast.success(getTranslatedText("withdraw_success"));
        setTimeout(function() {
          window.location.pathname = routes.accountWithdrawNoti;
        }, 3000);
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.WITHDRAW_MONEY_FAILURE:
      extractAndShoweErrorMessages(action.payload.error);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // DEPOSIT MONEY
    case types.DEPOSIT_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.DEPOSIT_MONEY_SUCCESS:
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        toast.success(getTranslatedText("deposit_success"), {
          autoClose: toastDuration,
        });
        let pathname = routes.accountDepositNoti
          .replace(':isBuyCourse', 'deposit')
          .replace(':code', action.payload.data.code)
          .replace(':amount', action.payload.data.amount);
        setTimeout(function() {
          window.location.pathname = pathname;
        }, 3000);
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.DEPOSIT_MONEY_FAILURE:
      extractAndShoweErrorMessages(action.payload.error);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // DASHBOARD
    case types.GET_USER_DASHBOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_USER_DASHBOARD_SUCCESS:
      if (
        action.payload.statusCode === 200 &&
        action.payload.errors.length === 0
      ) {
        return {
          ...state,
          loading: false,
          error: null,
          dashboard: action.payload.data,
        };
      } else {
        toast.error(action.payload.errors[0]);
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_USER_DASHBOARD_FAILURE:
      toast.error('Cannot get user dashboard!');

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
