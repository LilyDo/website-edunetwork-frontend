import * as types from '../actions';
import { toast } from 'react-toastify';
import { toastDuration } from '../constants';

const initialState = {
  loading: false,
  auth: [],
  error: null,
  isVerify: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.LOGIN_SUCCESS:
      if (action.payload.data.token) {
        localStorage.setItem(
          types.TOKEN_KEY,
          action.payload.data.token,
        );
        toast.success('Login successful!', {
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
      };

    case types.LOGIN_FAILURE:
      localStorage.removeItem(types.TOKEN_KEY);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // VERIFY EMAIL ACCOUNT
    case types.ACTIVE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        isVerify: false,
      };

    case types.ACTIVE_ACCOUNT_SUCCESS:
      toast.success('Active account successful!', {
        autoClose: toastDuration,
      });
      return {
        ...state,
        loading: false,
        isVerify: true,
      };

    case types.ACTIVE_ACCOUNT_FAILURE:
      toast.error('Cannote active the account', {
        autoClose: toastDuration,
      });

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isVerify: false,
      };

    default:
      return state;
  }
}
