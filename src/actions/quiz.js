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
} from './index';
import { toast } from 'react-toastify';

// GET PROFILE
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

const getQuizRankRequest = () => ({
  type: GET_QUIZ_RANK_REQUEST,
});

const getQuizRankSuccess = () => ({
  type: GET_QUIZ_RANK_SUCCESS,
  payload: payload,
});

const getQuizRankFailure = payload => ({
  type: GET_QUIZ_RANK_FAILURE,
  payload: payload,
});
