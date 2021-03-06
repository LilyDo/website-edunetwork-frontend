import { get } from 'lodash';
import { toast } from 'react-toastify';
import { CURRENT_USER_KEY } from '../actions';
import { routes } from '../constants';

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

// Create our number formatter.
export const currencyFormatter = amount => {
  let formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  });
  return '$' + formatter.format(amount);
};

const splitHoursMinutesSeconds = duration => {
  duration = parseInt(duration, 10);
  let hours = Math.floor(duration / 3600);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = Math.floor(duration / 60) % 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = duration % 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return {
    hours,
    minutes,
    seconds,
  };
};

export const formatDuration = duration => {
  const formattedDuration = splitHoursMinutesSeconds(duration);
  return `${formattedDuration.hours}:${formattedDuration.minutes}:${formattedDuration.seconds}`;
};

export const formatDurationText = duration => {
  const formattedDuration = splitHoursMinutesSeconds(duration);
  return `${formattedDuration.hours} hours ${formattedDuration.minutes} minutes ${formattedDuration.seconds} seconds`;
};

export const extractAndShoweErrorMessages = error => {
  const errorMessages = get(error, 'data.message', '').split(',');
  errorMessages.map(message => toast.error(message));
};

export const checkSessionLogout = action => {
  if (action === 'logout') {
    clearLocalStorage();
  }
};

export const clearLocalStorage = () => {
  localStorage.clear('persist:root');
  localStorage.removeItem('current_user');
  localStorage.removeItem('token');
  setTimeout(function() {
    window.location.pathname = routes.signin;
  }, 500);
};
