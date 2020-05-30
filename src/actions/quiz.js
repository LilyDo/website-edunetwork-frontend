import axios from 'axios';
import { get } from 'lodash';

import {
  BASE_URL,
  GET_QUIZ_REQUEST,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAILURE
} from './index';
import {toast} from "react-toastify";

// GET PROFILE
export const getQuizAction = payload => {
  return dispatch => {
    dispatch(getQuizRequest());
    axios.get(`${BASE_URL}/users/get-test?token=` + payload.token + "&lang=" + payload.lang)
    .then(response => {
      if (response.data.statusCode === 200)
        dispatch(getQuizSuccess(response.data));
      else
        dispatch(getQuizFailure(response.data));
    }).catch(error => {
      toast.error("Something went wrong!")
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
