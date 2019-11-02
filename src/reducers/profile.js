import * as types from '../actions';
import { toast } from 'react-toastify';
import { routes, toastDuration } from '../constants';

const initialState = {
  loading: false,
  data: {},
  error: null,
  isEditing: false,
  withdrawList: [],
  chargeList: [],
  dashboard: {},
};

export default function (state = initialState, action) {
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
        if (action.payload.options.redirect) {
          setTimeout(function () {
            window.location.pathname = `${routes.accountDashboard}`;
          }, 100);
        }
      } else {
        toast.error(action.payload.message, {
          autoClose: toastDuration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data.data,
      };

    case types.GET_PROFILE_FAILURE:
      localStorage.removeItem(types.TOKEN_KEY);

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
        toast.success('Update profile successful!', {
          autoClose: toastDuration,
        });
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: toastDuration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.UPDATE_PROFILE_FAILURE:
      toast.error('Cannot update profile', {
        autoClose: toastDuration,
      });

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
        toast.error(action.payload.errors[0], {
          autoClose: toastDuration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_CHARGE_HISTORY_FAILURE:
      toast.error('Cannot get charge history', {
        autoClose: toastDuration,
      });
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
        toast.success('Request successful!', {
          autoClose: toastDuration,
        });
        setTimeout(function () {
          window.location.pathname = routes.accountWithdrawNoti;
        }, 100);
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: toastDuration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.WITHDRAW_MONEY_FAILURE:
      toast.error('Cannot send request to withraw money', {
        autoClose: toastDuration,
      });

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
        toast.error(action.payload.errors[0], {
          autoClose: toastDuration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_USER_DASHBOARD_FAILURE:
      toast.error('Cannot get user dashboard!', {
        autoClose: toastDuration,
      });

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
