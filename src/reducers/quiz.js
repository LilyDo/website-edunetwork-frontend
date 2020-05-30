import * as types from '../actions';
import { routes, toastDuration } from '../constants';
import {
  extractAndShoweErrorMessages,
  checkSessionLogout,
  getTranslatedText,
} from '../services/appService';
import {toast} from "react-toastify";

const initialState = {
  loading: false,
  data: {
    questions: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_QUIZ_SUCCESS:

      return {
        ...state,
        loading: false,
        data: action.payload.data
      };

    case types.GET_QUIZ_FAILURE:
      // console.log(action.payload);
      toast.error(action.payload.errors.join(", "));
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}
