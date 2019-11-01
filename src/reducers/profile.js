import * as types from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  auth: [],
  error: null,
  isEditing: false,
  withdrawList: [],
  chargeList: [],
  dashboard: {}
};

export default function (state = initialState, action) {
  const duration = 3000;

  switch (action.type) {
    // GET CURRENT USER PROFILE
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_PROFILE_SUCCESS:
      if (action.payload.data.statusCode === 200 && action.payload.data.errors.length === 0) {
        let currentUser = action.payload.data.data;
        localStorage.setItem(
          types.CURRENT_USER_KEY,
          JSON.stringify(currentUser),
        );
        if (action.payload.options.redirect) {
          setTimeout(function () {
            window.location.pathname = '/';
          }, 100);
        }
      } else {
        toast.error(action.payload.message, { autoClose: duration });
      }

      return {
        ...state,
        loading: false,
        error: null,
        auth: [...state.auth, action.payload],
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
      if (action.payload.statusCode === 200 && action.payload.errors.length === 0) {
        toast.success('Update profile successful!', {
          autoClose: duration,
        });
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: duration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.UPDATE_PROFILE_FAILURE:
      console.log("UPDATE_PROFILE_FAILURE");
      toast.error('Cannot update profile', { autoClose: duration });

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
      if (action.payload.statusCode === 200 && action.payload.errors.length === 0) {
        return {
          ...state,
          withdrawList: action.payload.data.draw,
          chargeList: action.payload.data.charge,
        };
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: duration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_CHARGE_HISTORY_FAILURE:
      toast.error('Cannot get charge history', {
        autoClose: duration,
      });
      return {
        ...state,
      };

    // WITHDRAW MONEY
    case types.WITHDRAW_MONEY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.WITHDRAW_MONEY_SUCCESS:
      if (action.payload.statusCode === 200 && action.payload.errors.length === 0) {
        toast.success('Request successful!', {
          autoClose: duration,
        });
        setTimeout(function () {
          window.location.pathname = '/account/profile/withdraw-noti';
        }, 100);
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: duration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.WITHDRAW_MONEY_FAILURE:
      toast.error('Cannot send request to withraw money', {
        autoClose: duration,
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
      console.log("dashboard response", action.payload);
      if (action.payload.statusCode === 200 && action.payload.errors.length === 0) {
        return {
          ...state,
          loading: false,
          error: null,
          dashboard: action.payload.data
        };
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: duration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.GET_USER_DASHBOARD_FAILURE:
      toast.error('Cannot get user dashboard!', {
        autoClose: duration,
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
