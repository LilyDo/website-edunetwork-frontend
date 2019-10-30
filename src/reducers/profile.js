import * as types from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  auth: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    // GET CURRENT USER PROFILE
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.GET_PROFILE_SUCCESS:
      const duration = 100
      if (action.payload.statusCode == 200) {
        let currentUser = action.payload.data[0];
        localStorage.setItem(types.CURRENT_USER, JSON.stringify(currentUser));
        setTimeout(function () {
          window.location.pathname = '/'
        }, duration)
      } else {
        toast(action.payload.message, { autoClose: duration })
      }

      return {
        ...state,
        loading: false,
        error: null,
        auth: [...state.auth, action.payload]
      };

    case types.GET_PROFILE_FAILURE:
      localStorage.removeItem(types.TOKEN_KEY)

      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
      
    default:
      return state;
  }
};