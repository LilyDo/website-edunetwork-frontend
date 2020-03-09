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
  GET_ORDER_DETAIL_BY_CODE_REQUEST,
  GET_ORDER_DETAIL_BY_CODE_SUCCESS,
  GET_ORDER_DETAIL_BY_CODE_FAILURE,
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATION_REQUEST,
  GET_NOTIFICATION_SUCCESS,
  GET_NOTIFICATION_FAILURE,
  UPDATE_NOTIFICATION_REQUEST,
  UPDATE_NOTIFICATION_SUCCESS,
  UPDATE_NOTIFICATION_FAILURE,
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
        dispatch(
          getProfileAction({
            token: localStorage.getItem(types.TOKEN_KEY),
            options: { redirect: false },
          }),
        );
        dispatch(requestDepositSuccess(response.data));
      })
      .catch(error =>
        dispatch(requestDepositFailure(error.response)),
      );
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

// GET ORDER DETAIL BY CODE
export const getOrderDetailByCode = code => {
  return dispatch => {
    dispatch(getOrderDetailByCodeRequest());
    axios
      .get(`${BASE_URL}/users/get-order-detail-by-code/${code}`)
      .then(response => {
        dispatch(getOrderDetailByCodeSuccess(response.data));
      })
      .catch(error =>
        dispatch(getOrderDetailByCodeFailure(error.response)),
      );
  };
};

const getOrderDetailByCodeRequest = code => ({
  type: GET_ORDER_DETAIL_BY_CODE_REQUEST,
  payload: code,
});

const getOrderDetailByCodeSuccess = response => ({
  type: GET_ORDER_DETAIL_BY_CODE_SUCCESS,
  payload: { ...response },
});

const getOrderDetailByCodeFailure = error => ({
  type: GET_ORDER_DETAIL_BY_CODE_FAILURE,
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

// GET USER NOTIFICATIONS
export const getNotifications = () => {
  return dispatch => {
    dispatch(getNotificationRequest());
    axios
      .post(`${BASE_URL}/users/get-notification`, {
        token: localStorage.getItem(types.TOKEN_KEY) || '',
      })
      .then(response => {
        dispatch(
          getNotificationSuccess({
            notifications: response.data,
          }),
        );
      })
      .catch(error =>
        dispatch(getNotificationFailure(error.message)),
      );
  };
};

const getNotificationRequest = () => ({
  type: GET_NOTIFICATIONS_REQUEST,
});

const getNotificationSuccess = payload => ({
  type: GET_NOTIFICATIONS_SUCCESS,
  payload: payload,
});

const getNotificationFailure = error => ({
  type: GET_NOTIFICATIONS_FAILURE,
  payload: { error },
});

// VIEW NOTIFICATION
export const viewNotification = () => {
  return dispatch => {
    dispatch(viewNotificationRequest());
    axios
      .post(`${BASE_URL}/users/get-notification`, {
        token: localStorage.getItem(types.TOKEN_KEY) || '',
      })
      .then(response => {
        dispatch(
          viewNotificationSuccess({
            notifications: response.data,
          }),
        );
      })
      .catch(error =>
        dispatch(viewNotificationFailure(error.message)),
      );
  };
};

const viewNotificationRequest = () => ({
  type: GET_NOTIFICATION_REQUEST,
});

const viewNotificationSuccess = payload => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: payload,
});

const viewNotificationFailure = error => ({
  type: GET_NOTIFICATION_FAILURE,
  payload: { error },
});
