import axios from 'axios';
import { get } from 'lodash';

import {
  BASE_URL,
  GET_QUIZ_REQUEST,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAILURE,
  GET_QUIZ_RANK_REQUEST,
  GET_QUIZ_RANK_SUCCESS,
  GET_QUIZ_RANK_FAILURE,
  GET_PERMISSION_QUIZ_REQUEST,
  GET_PERMISSION_QUIZ_SUCCESS,
  GET_PERMISSION_QUIZ_FAILURE,
  POST_RESULT_QUIZ_REQUEST,
  POST_RESULT_QUIZ_SUCCESS,
  POST_RESULT_QUIZ_FAILURE,
} from './index';
import { toast } from 'react-toastify';

export const getQuizAction = payload => {
  return dispatch => {
    dispatch(getQuizRequest());
    axios
      .get(
        `${BASE_URL}/users/get-test?token=` +
          payload.token +
          '&lang=' +
          payload.lang,
      )
      .then(response => {
        if (response.data.statusCode === 200)
          dispatch(getQuizSuccess(response.data));
        else dispatch(getQuizFailure(response.data));
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };
};

const getQuizRequest = () => ({
  type: GET_QUIZ_REQUEST,
});

const getQuizSuccess = payload => ({
  type: GET_QUIZ_SUCCESS,
  payload: payload,
});

const getQuizFailure = payload => ({
  type: GET_QUIZ_FAILURE,
  payload: payload,
});

//GET QUIZ RANK
export const getQuizRankAction = payload => {
  return dispatch => {
    dispatch(getQuizRankRequest());
    axios
      .get(`${BASE_URL}/users/result-revenue`)
      .then(response => {
        if (response.data.statusCode === 200) {
          dispatch(getQuizRankSuccess(response.data));
        } else {
          dispatch(getQuizRankFailure(response.data));
        }
      })
      .catch(error => {
        // toast.error('Something went wrong!');
        toast.error(error.toString());
      });
  };
};

export const getPermissionQuizAction = payload => {
  return dispatch => {
    dispatch(getPermissionQuizRequest());
    axios
      .get(
        `${BASE_URL}/users/accept-for-examination?token=` +
          payload.token,
      )
      .then(response => {
        if (response.data.statusCode === 200)
          dispatch(getPermissionQuizSuccess(response.data));
        else dispatch(getPermissionQuizFailure(response.data));
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };
};

const getQuizRankRequest = () => ({
  type: GET_QUIZ_RANK_REQUEST,
});

const getQuizRankSuccess = payload => ({
  type: GET_QUIZ_RANK_SUCCESS,
  payload: payload,
});

const getQuizRankFailure = payload => ({
  type: GET_QUIZ_RANK_FAILURE,
});

const getPermissionQuizRequest = () => ({
  type: GET_PERMISSION_QUIZ_REQUEST,
});

const getPermissionQuizSuccess = payload => ({
  type: GET_PERMISSION_QUIZ_SUCCESS,
  payload: payload,
});

const getPermissionQuizFailure = payload => ({
  type: GET_PERMISSION_QUIZ_FAILURE,
  payload: payload,
});

export const postResultQuizAction = payload => {
  return dispatch => {
    dispatch(postResultQuizRequest());
    axios
      .post(`${BASE_URL}/users/post-test-result`, payload)
      .then(response => {
        if (response.data.statusCode === 200)
          dispatch(postResultQuizSuccess(response.data));
        else dispatch(postResultQuizFailure(response.data));
      })
      .catch(error => {
        toast.error('Something went wrong!');
      });
  };
};

const postResultQuizRequest = () => ({
  type: POST_RESULT_QUIZ_REQUEST,
});

const postResultQuizSuccess = payload => ({
  type: POST_RESULT_QUIZ_SUCCESS,
  payload: payload,
});

const postResultQuizFailure = payload => ({
  type: POST_RESULT_QUIZ_FAILURE,
  payload: payload,
});
