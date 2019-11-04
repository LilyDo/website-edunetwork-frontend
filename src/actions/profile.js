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
  GET_CHARGE_HISTORY_REQUEST,
  GET_CHARGE_HISTORY_SUCCESS,
  GET_CHARGE_HISTORY_FAILURE,
  WITHDRAW_MONEY_REQUEST,
  WITHDRAW_MONEY_SUCCESS,
  WITHDRAW_MONEY_FAILURE,
  GET_USER_DASHBOARD_REQUEST,
  GET_USER_DASHBOARD_SUCCESS,
  GET_USER_DASHBOARD_FAILURE,
  DEPOSIT_MONEY_REQUEST,
  DEPOSIT_MONEY_SUCCESS,
  DEPOSIT_MONEY_FAILURE,
} from './index';
import * as types from '../actions/index';

// GET PROFILE
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

// UPDATE PROFILE
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
      .catch(error => {
        dispatch(updateProfileFailure(error.message));
      });
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

// SHOW UPDATE FORM
export const showUpdateFormAction = () => {
  return dispatch => {
    dispatch(showUpProfileRequest());
  };
};

const showUpProfileRequest = () => ({
  type: SHOW_UPDATE_FORM,
});

// GET CHARGE HISTORY
export const getChargeHistoryAction = () => {
  return dispatch => {
    dispatch(getChargeHistoryRequest());
    axios
      .post(`${BASE_URL}/users/charge-history`, {
        token: localStorage.getItem(types.TOKEN_KEY),
      })
      .then(response => {
        dispatch(getChargeHistorySuccess(response.data));
      })
      .catch(error =>
        dispatch(getChargeHistoryFailure(error.message)),
      );
  };
};

const getChargeHistoryRequest = () => ({
  type: GET_CHARGE_HISTORY_REQUEST,
});

const getChargeHistorySuccess = response => ({
  type: GET_CHARGE_HISTORY_SUCCESS,
  payload: { ...response },
});

const getChargeHistoryFailure = error => ({
  type: GET_CHARGE_HISTORY_FAILURE,
  payload: { error },
});

// WITHDRAW MONEY
export const withdrawMoneyAction = payload => {
  return dispatch => {
    dispatch(withdrawMoneyRequest());
    payload.append('token', localStorage.getItem(types.TOKEN_KEY));
    axios
      .post(`${BASE_URL}/users/draw-money`, payload)
      .then(response => {
        dispatch(withdrawMoneySuccess(response.data));
      })
      .catch(error => dispatch(withdrawMoneyFailure(error.response)));
  };
};

const withdrawMoneyRequest = payload => ({
  type: WITHDRAW_MONEY_REQUEST,
  payload: payload,
});

const withdrawMoneySuccess = response => ({
  type: WITHDRAW_MONEY_SUCCESS,
  payload: { ...response },
});

const withdrawMoneyFailure = error => ({
  type: WITHDRAW_MONEY_FAILURE,
  payload: { error },
});

// DEPOSIT MONEY
export const requestDepositAction = payload => {
  return dispatch => {
    dispatch(requestDepositRequest());
    payload.token = localStorage.getItem(types.TOKEN_KEY);
    axios
      .post(`${BASE_URL}/users/recharge`, payload)
      .then(response => {
        dispatch(requestDepositSuccess(response.data));
      })
      .catch(error => dispatch(requestDepositFailure(error.response)));
  };
};

const requestDepositRequest = payload => ({
  type: DEPOSIT_MONEY_REQUEST,
  payload: payload,
});

const requestDepositSuccess = response => ({
  type: DEPOSIT_MONEY_SUCCESS,
  payload: { ...response },
});

const requestDepositFailure = error => ({
  type: DEPOSIT_MONEY_FAILURE,
  payload: { error },
});

// GET USER DASHBOARD
export const getUserDashboardAction = () => {
  return dispatch => {
    dispatch(getUserDashboardRequest());
    axios
      .post(`${BASE_URL}/users/dashboard`, {
        token: localStorage.getItem(types.TOKEN_KEY) || '',
      })
      .then(response => {
        dispatch(getUserDashboardSuccess(response.data));
      })
      .catch(error =>
        dispatch(getUserDashboardFailure(error.message)),
      );
  };
};

const getUserDashboardRequest = () => ({
  type: GET_USER_DASHBOARD_REQUEST,
});

const getUserDashboardSuccess = response => ({
  type: GET_USER_DASHBOARD_SUCCESS,
  payload: { ...response },
});

const getUserDashboardFailure = error => ({
  type: GET_USER_DASHBOARD_FAILURE,
  payload: { error },
});
