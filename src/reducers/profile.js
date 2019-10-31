import * as types from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  auth: [],
  error: null,
  isEditing: false,
};

export default function(state = initialState, action) {
  const duration = 3000;

  switch (action.type) {
    // GET CURRENT USER PROFILE
    case types.GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_PROFILE_SUCCESS:
      if (action.payload.data.statusCode == 200) {
        let currentUser = action.payload.data.data;
        localStorage.setItem(
          types.CURRENT_USER_KEY,
          JSON.stringify(currentUser),
        );
        if (action.payload.options.redirect) {
          setTimeout(function() {
            window.location.pathname = '/';
          }, 100);
        }
      } else {
        toast.error(action.payload.message, { autoClose: duration });
      }

      return {
        ...state,
        loading: false,
        error: null,
        auth: [...state.auth, action.payload],
      };

    case types.GET_PROFILE_FAILURE:
      localStorage.removeItem(types.TOKEN_KEY);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // UPDATE CURRENT USER PROFILE
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        isEditing: true,
      };

    case types.UPDATE_PROFILE_SUCCESS:
      state.isEditing = false;
      if (action.payload.statusCode == 200) {
        toast.success('Update profile successful!', {
          autoClose: duration,
        });
      } else {
        toast.error(action.payload.errors[0], {
          autoClose: duration,
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.UPDATE_PROFILE_FAILURE:
      toast.error('Cannot update profile', { autoClose: duration });

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    // SHOW UPDATE FORM
    case types.SHOW_UPDATE_FORM:
      return {
        ...state,
        isEditing: !state.isEditing,
      };

    default:
      return state;
  }
}
