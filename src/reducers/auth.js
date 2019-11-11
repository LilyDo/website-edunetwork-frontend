import * as types from '../actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { extractAndShoweErrorMessages } from '../services/appService';

const initialState = {
  loading: false,
  auth: [],
  error: null,
  isVerify: false,
  isForgotPasswordPopupShown: false,
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
        toast.success('Login successful!');
      } else {
        toast.error(action.payload.errors[0]);
      }
      return {
        ...state,
        loading: false,
      };

    case types.LOGIN_FAILURE:
      if (get(action, 'payload.error.status', 0) === 401) {
        toast.error('Wrong username or password!');
      }
      localStorage.removeItem(types.TOKEN_KEY);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // LOGIN
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.REGISTER_FAILURE:
      extractAndShoweErrorMessages(action.payload.error);
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
      toast.success('Active account successful!');
      return {
        ...state,
        loading: false,
        isVerify: true,
      };

    case types.ACTIVE_ACCOUNT_FAILURE:
      toast.error('Cannot active the account');

      return {
        ...state,
        loading: false,
        error: action.payload.error,
        isVerify: false,
      };

    // FORGOT PASSWORD
    case types.TOGGLE_FORGOT_PASSWORD_POPUP:
      return {
        ...state,
        isForgotPasswordPopupShown: action.payload,
      };
    default:
      return state;
  }
}
