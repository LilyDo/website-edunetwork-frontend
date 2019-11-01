import axios from 'axios';
import {
  BASE_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ACTIVE_ACCOUNT_REQUEST,
  ACTIVE_ACCOUNT_SUCCESS,
  ACTIVE_ACCOUNT_FAILURE,
} from './index';
import { getProfileAction } from './profile';
import { toast } from 'react-toastify';

export const loginAction = user => {
  return dispatch => {
    dispatch(loginRequest());

    axios
      .post(`${BASE_URL}/users/login`, user)
      .then(response => {
        dispatch(loginSuccess(response.data));
        dispatch(
          getProfileAction({
            token: response.data.data.token,
            options: {
              redirect: true,
            },
          }),
        );
      })
      .catch(error => dispatch(loginFailure(error.message)));
  };
};

const loginRequest = user => ({
  type: LOGIN_REQUEST,
  payload: user,
});

const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...response,
  },
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
});

// REGISTER ACCOUNT
export const registerAction = user => {
  return dispatch => {
    dispatch(registerRequest());

    axios
      .post(`${BASE_URL}/users/register`, user)
      .then(response => {
        if (
          response.data.statusCode === 200 &&
          response.data.errors.length === 0
        ) {
          dispatch(registerSuccess(response.data));
          setTimeout(function() {
            window.location.pathname = '/register-pending-active';
          }, 100);
        } else {
          let obj = response.data.errors;
          Object.keys(obj).forEach(function eachKey(key) {
            toast.error(JSON.stringify(obj[key]), {
              autoClose: 3000,
            });
          });
          dispatch(
            registerFailure(Object.keys(response.data.errors)[0]),
          );
        }
      })
      .catch(error => dispatch(registerFailure(error.message)));
  };
};

const registerRequest = user => ({
  type: REGISTER_REQUEST,
  payload: user,
});

const registerSuccess = response => ({
  type: REGISTER_SUCCESS,
  payload: {
    ...response,
  },
});

const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: {
    error,
  },
});

// VERIFY ACCOUNT
export const verifyAccountAction = code => {
  return dispatch => {
    dispatch(verifyAccountRequest());

    axios
      .post(`${BASE_URL}/users/verify-register`, {
        verify_code: code,
      })
      .then(response => {
        if (
          response.data.statusCode === 200 &&
          response.data.errors.length === 0
        ) {
          dispatch(verifyAccountSuccess(response.data));
        } else {
          let obj = response.data.errors;
          Object.keys(obj).forEach(function eachKey(key) {
            toast.error(JSON.stringify(obj[key]), {
              autoClose: 3000,
            });
          });
          dispatch(
            verifyAccountFailure(
              Object.keys(response.data.errors)[0],
            ),
          );
        }
      })
      .catch(error => dispatch(registerFailure(error.message)));
  };
};

const verifyAccountRequest = user => ({
  type: ACTIVE_ACCOUNT_REQUEST,
  payload: user,
});

const verifyAccountSuccess = response => ({
  type: ACTIVE_ACCOUNT_SUCCESS,
  payload: {
    ...response,
  },
});

const verifyAccountFailure = error => ({
  type: ACTIVE_ACCOUNT_FAILURE,
  payload: {
    error,
  },
});
