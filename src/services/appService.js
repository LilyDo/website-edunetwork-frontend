import { get } from 'lodash';
import { toast } from 'react-toastify';
import { CURRENT_USER_KEY, CURRENT_LANG_KEY } from '../actions';
import { routes } from '../constants';
import { translatedText } from './lang';

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
  try {
    let errObj = JSON.parse(error.data.message);
    let keys = Object.keys(errObj);
    keys.map(key => toast.error(errObj[key][0]));
  } catch (e) {
    toast.error(error.data.message);
  }
};

export const formDataToObject = formData => {
  let jsonObject = {};
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
  return jsonObject;
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

export const getTranslatedText = key => {
  key = key.toLowerCase();
  let currentLang = localStorage.getItem(CURRENT_LANG_KEY) || 'en';
  if (typeof translatedText[key] == 'undefined') return key;
  return translatedText[key][currentLang];
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const rollingGame = async () => {
  // This function is service used to play game
  // Request url : https://edunetwork.dev.gkcsoftware.com/api/v1/users/rolling
  // Method: POST
  // Body: token
  const data = {
    token: 'token',
  };
  const url =
    'https://edunetwork.dev.gkcsoftware.com/api/v1/users/rolling';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const addMoneyToWallet = async () => {
  // This function is service used to push money to wallet
  // Request url : https://edunetwork.dev.gkcsoftware.com/api/v1/users/add-to-wallet
  // Method: POST
  // Body: token, money
  const data = {
    token: 'token',
    money: '10',
  };
  const url =
    'https://edunetwork.dev.gkcsoftware.com/api/v1/users/add-to-wallet';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const resultGame = async () => {
  // This function is service used to get result of game
  // Request url : https://edunetwork.dev.gkcsoftware.com/api/v1/users/result
  // Method: GET
  const url =
    'https://edunetwork.dev.gkcsoftware.com/api/v1/users/result';
  await fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};
