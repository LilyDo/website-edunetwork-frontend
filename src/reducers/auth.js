import * as types from '../actions';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  auth: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.LOGIN_SUCCESS:
      const duration = 3000
      if (action.payload.data.token) {
        localStorage.setItem(types.TOKEN_KEY, action.payload.data.token)
        toast("Đăng nhập thành công!", { autoClose: duration })
      } else {
        toast(action.payload.errors[0], { autoClose: duration })
      };
      
    case types.LOGIN_FAILURE:
      localStorage.removeItem(types.TOKEN_KEY)

      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

      // REGISTER
      
    default:
      return state;
  }
};