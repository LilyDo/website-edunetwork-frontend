import * as types from '../actions';
import { toast } from 'react-toastify';
import { routes } from '../constants';

const initialState = {
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    // SEND CONTACT
    case types.SEND_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.SEND_CONTACT_SUCCESS:
      let response = action.payload;
      if (
        response.data.statusCode === 200 &&
        response.data.errors.length === 0
      ) {
        toast.success('Sent sucessfull!');
        setTimeout(function() {
          window.location.pathname = `${routes.sendContactSuccessful}`;
        }, 3000);
      } else {
        let obj = response.data.errors;
        Object.keys(obj).forEach(function eachKey(key) {
          toast.error(JSON.stringify(obj[key]));
        });
      }

      return {
        ...state,
        loading: false,
        error: null,
      };

    case types.SEND_CONTACT_FAILURE:
      toast.error(action.payload.message);

      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
