import axios from 'axios';
import { BASE_URL, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './index';

export const getProfileAction = (token) => {
  console.log("getProfileAction", token);
  return dispatch => {
    dispatch(getProfileRequest(token));
    console.log("dispatch(getProfileRequest", token);
    axios.post(`${BASE_URL}/users/profile`, { "token": token })
      .then(response => dispatch(getProfileSuccess(response.data)))
      .catch(error => dispatch(getProfileFailure(error.message)))
  }
}

export const getProfileRequest = (token) => ({
  type: GET_PROFILE_REQUEST,
  payload: token
})

const getProfileSuccess = response => ({
  type: GET_PROFILE_SUCCESS,
  payload: { ...response }
})

const getProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  payload: { error }
})