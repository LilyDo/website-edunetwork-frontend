import * as types from '../actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import {extractAndShoweErrorMessages, getTranslatedText} from '../services/appService';

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
        toast.success(getTranslatedText('login_success'));
      } else {
        toast.error(action.payload.errors[0]);
      }
      return {
        ...state,
        loading: false,
      };

    case types.LOGIN_FAILURE:
      console.log(action);
      // if (get(action, 'payload.error.status', 0) === 401) {
      toast.error(
        (action.payload.error &&
          action.payload.error.data &&
          action.payload.error.data.message) ||
          'Cannot login',
      );
      // }
      localStorage.removeItem(types.TOKEN_KEY);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // REGISTER
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
      toast.success(getTranslatedText("active_account_success"));
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
    case types.SEND_FORGOT_PASSWORD_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_FORGOT_PASSWORD_EMAIL_SUCCESS:
      toast.success(getTranslatedText("check_email_reset"));
      return {
        ...state,
        loading: false,
        isForgotPasswordPopupShown: false,
      };
    case types.SEND_FORGOT_PASSWORD_EMAIL_FAILURE:
      toast.error(
        'Cannot reset password, make sure you enter correct email address!',
      );

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.RESET_PASSWORD_SUCCESS:
      toast.success(getTranslatedText("password_reset"));
      return {
        ...state,
        loading: false,
      };
    case types.RESET_PASSWORD_FAILURE:
      toast.error(
        'Cannot reset password, make sure you enter correct email address!',
      );

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
