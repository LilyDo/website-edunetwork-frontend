import axios from 'axios';
import { BASE_URL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './index';

export const loginAction = (user) => {
  return dispatch => {
    dispatch(loginRequest());

    axios.post(`${BASE_URL}/login`, user)
      .then(response => dispatch(loginSuccess(response.data)))
      .catch(error => dispatch(loginFailure(error.message)))
  }
}

const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  payload: user
})

const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: { ...response }
})

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: { error }
})