// export const USER_WEBSITE_URL = 'http://localhost:3000';
export const USER_WEBSITE_URL =
  'https://edunetwork.dev.gkcsoftware.com';
// export const BASE_URL = 'http://web-dev.edunetwork.com/api/v1';
export const BASE_URL =
  'https://api.edunetwork.dev.gkcsoftware.com/api/v1';
export const TOKEN_KEY = 'token';
export const CURRENT_USER_KEY = 'current_user';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const SHOW_UPDATE_FORM = 'SHOW_UPDATE_FORM';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_CHARGE_HISTORY_REQUEST =
  'GET_CHARGE_HISTORY_REQUEST';
export const GET_CHARGE_HISTORY_SUCCESS =
  'GET_CHARGE_HISTORY_SUCCESS';
export const GET_CHARGE_HISTORY_FAILURE =
  'GET_CHARGE_HISTORY_FAILURE';

export const ACTIVE_ACCOUNT_REQUEST = 'ACTIVE_ACCOUNT_REQUEST';
export const ACTIVE_ACCOUNT_SUCCESS = 'ACTIVE_ACCOUNT_SUCCESS';
export const ACTIVE_ACCOUNT_FAILURE = 'ACTIVE_ACCOUNT_FAILURE';

export const WITHDRAW_MONEY_REQUEST = 'WITHDRAW_MONEY_REQUEST';
export const WITHDRAW_MONEY_SUCCESS = 'WITHDRAW_MONEY_SUCCESS';
export const WITHDRAW_MONEY_FAILURE = 'WITHDRAW_MONEY_FAILURE';

export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';

export const GET_COURSE_DETAIL_REQUEST = 'GET_COURSE_DETAIL_REQUEST';
export const GET_COURSE_DETAIL_SUCCESS = 'GET_COURSE_DETAIL_SUCCESS';
export const GET_COURSE_DETAIL_FAILURE = 'GET_COURSE_DETAIL_FAILURE';

export const BUY_COURSE_REQUEST = 'BUY_COURSE_REQUEST';
export const BUY_COURSE_SUCCESS = 'BUY_COURSE_SUCCESS';
export const BUY_COURSE_FAILURE = 'BUY_COURSE_FAILURE';

export const GET_USER_COURSESS_REQUEST = 'GET_USER_COURSESS_REQUEST';
export const GET_USER_COURSESS_SUCCESS = 'GET_USER_COURSESS_SUCCESS';
export const GET_USER_COURSESS_FAILURE = 'GET_USER_COURSESS_FAILURE';

// This middleware will just add the property "async dispatch"
// to actions with the "async" propperty set to true
export const asyncDispatchMiddleware = store => next => action => {
  let syncActivityFinished = false;
  let actionQueue = [];

  function flushQueue() {
    actionQueue.forEach(a => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = Object.assign({}, action, {
    asyncDispatch,
  });

  const res = next(actionWithAsyncDispatch);

  syncActivityFinished = true;
  flushQueue();

  return res;
};
