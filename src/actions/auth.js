import axios from 'axios';
import {
  BASE_URL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
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
  payload: { ...response },
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const registerAction = user => {
  return dispatch => {
    dispatch(registerRequest());

    axios
      .post(`${BASE_URL}/users/register`, user)
      .then(response => {
        if (response.data.statusCode === 200) {
          dispatch(registerSuccess(response.data));
          dispatch(
            loginAction({
              email: user.email,
              password: user.password,
            }),
          );
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
  payload: { ...response },
});

const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: { error },
});
