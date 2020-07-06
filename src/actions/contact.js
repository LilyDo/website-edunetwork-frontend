import axios from 'axios';
import {
  BASE_URL,
  SEND_CONTACT_REQUEST,
  SEND_CONTACT_SUCCESS,
  SEND_CONTACT_FAILURE,
} from './index';
import { headerLang } from '../constants';

// GET PROFILE
export const sendContactAction = payload => {
  return dispatch => {
    dispatch(sendContactRequest());
    axios
      .post(`${BASE_URL}/send-contact`, payload, headerLang)
      .then(response => {
        dispatch(sendContactSuccess(response));
      })
      .catch(error => {
        dispatch(sendContactFailure(error.message));
      });
  };
};

const sendContactRequest = () => ({
  type: SEND_CONTACT_REQUEST,
});

const sendContactSuccess = payload => ({
  type: SEND_CONTACT_SUCCESS,
  payload: payload,
});

const sendContactFailure = error => ({
  type: SEND_CONTACT_FAILURE,
  payload: { error },
});
