import { CURRENT_USER_KEY } from '../actions';

export const getUserFormLocal = function() {
  let user = localStorage.getItem(CURRENT_USER_KEY);
  if (user && user !== 'null' && user !== 'undefined') {
    return JSON.parse(user);
  } else {
    return false;
  }
};

export const getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};
