import axios from 'axios';
import {
  BASE_URL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  SHOW_UPDATE_FORM,
} from './index';
import * as types from '../actions/index';

export const getProfileAction = payload => {
  return dispatch => {
    dispatch(getProfileRequest());
    axios
      .post(`${BASE_URL}/users/profile`, {
        token: payload.token,
      })
      .then(response => {
        dispatch(
          getProfileSuccess({
            data: response.data,
            options: payload.options,
          }),
        );
      })
      .catch(error => dispatch(getProfileFailure(error.message)));
  };
};

const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});

const getProfileSuccess = payload => ({
  type: GET_PROFILE_SUCCESS,
  payload: payload,
});

const getProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  payload: { error },
});

export const updateProfileAction = userProfile => {
  return dispatch => {
    dispatch(updateProfileRequest(userProfile));
    axios
      .post(`${BASE_URL}/users/update-profile`, userProfile)
      .then(response => {
        dispatch(updateProfileSuccess(response.data));
        dispatch(
          getProfileAction({
            token: localStorage.getItem(types.TOKEN_KEY),
            options: { redirect: false },
          }),
        );
      })
      .catch(error => dispatch(updateProfileFailure(error.message)));
  };
};

const updateProfileRequest = userProfile => ({
  type: UPDATE_PROFILE_REQUEST,
  payload: userProfile,
});

const updateProfileSuccess = response => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: { ...response },
});

const updateProfileFailure = error => ({
  type: UPDATE_PROFILE_FAILURE,
  payload: { error },
});

export const showUpdateFormAction = () => {
  return dispatch => {
    dispatch(showUpProfileRequest());
  };
};

const showUpProfileRequest = () => ({
  type: SHOW_UPDATE_FORM,
});
