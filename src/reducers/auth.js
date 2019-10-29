import * as types from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  auth: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      if (action.payload.data) {
        localStorage.setItem(types.TOKEN_KEY, action.payload.data.token)
      }
      const duration = 3000
      toast("Đăng nhập thành công!", { autoClose: duration })
      setTimeout(function () {
        window.location.pathname = '/'
      }, duration)

      return {
        ...state,
        loading: false,
        error: null,
        auth: [...state.auth, action.payload]
      };
    case types.LOGIN_FAILURE:
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