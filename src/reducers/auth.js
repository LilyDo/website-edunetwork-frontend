import * as types from '../actions';

export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_REQUEST:
      console.log('xxx', "make API call");
      console.log('xxx', action.payload)
    case types.LOGIN_SUCCESS:
      return { ...state, response };
    case types.LOGIN_FAILURE:
      return { ...state, response };
    default:
      return state;
  }
};