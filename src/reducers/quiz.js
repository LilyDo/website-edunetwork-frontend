import * as types from '../actions';
import { routes, toastDuration } from '../constants';
import {
  extractAndShoweErrorMessages,
  checkSessionLogout,
  getTranslatedText,
} from '../services/appService';
import { toast } from 'react-toastify';
import _ from 'lodash';

const initialState = {
  loading: false,
  data: {
    questions: [],
  },
  rank: [],
  time_event: {},
  progress_event: '',
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
        data: action.payload.data,
      };

    case types.GET_QUIZ_FAILURE:
      // console.log(action.payload);
      toast.error(action.payload.errors.join(', '));
      return {
        ...state,
        loading: false,
      };

    case types.GET_QUIZ_RANK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_PERMISSION_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_QUIZ_RANK_SUCCESS:
      return {
        ...state,
        loading: false,
        rank: action.payload.data,
      };

    case types.GET_QUIZ_RANK_FAILURE:
      toast.error(action.payload.errors.join(', '));
      return {
        ...state,
        loading: false,
      };
    case types.GET_PERMISSION_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        canContinue: 1,
      };

    case types.GET_PERMISSION_QUIZ_FAILURE:
      // console.log(action.payload);
      toast.error(action.payload.errors.join(', '));
      return {
        ...state,
        canContinue: 0,
        loading: false,
      };

    case types.POST_RESULT_QUIZ_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.POST_RESULT_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.POST_RESULT_QUIZ_FAILURE:
      // console.log(action.payload);
      toast.error(action.payload.errors.join(', '));
      return {
        ...state,
        loading: false,
      };

    case types.GET_TIME_QUIZ_EVENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    
    case types.GET_TIME_QUIZ_EVENT_SUCCESS:
      const startDate = Date.parse(action.payload.data.start);
      const endDate = Date.parse(action.payload.data.end);
      const nowDate = Date.parse(action.payload.data.now);
      let nowDateConvert = _.replace(
        action.payload.data.now,
        '-',
        '.',
      );
      nowDateConvert = _.replace(nowDateConvert, '-', '.');
      const totalTimeOfEvent = endDate - startDate;
      const currentTotalTimeOfEvent = nowDate - startDate;
      const progressEvent = parseInt(
        (currentTotalTimeOfEvent / totalTimeOfEvent) * 100,
      );
      return {
        ...state,
        loading: false,
        time_event: action.payload.data,
        progress_event: progressEvent,
      }
    case types.GET_TIME_QUIZ_EVENT_FAILURE:
      toast.error(action.payload.errors.join(','));
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
