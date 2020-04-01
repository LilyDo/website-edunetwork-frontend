import { toast } from 'react-toastify';
import { CURRENT_USER_KEY, CURRENT_LANG_KEY } from '../actions';
import { routes } from '../constants';
import { translatedText } from './lang';
import axios from 'axios';
import _ from 'lodash';

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
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/users/rolling
  // Method: POST
  // Body: token
  const base_url = process.env.REACT_APP_API_ENV;
  const login_token = window.localStorage.getItem('token');
  return await axios
    .post(base_url + '/v1/users/rolling', {
      token: login_token,
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const addMoneyToWallet = async () => {
  // This function is service used to push money to wallet
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/users/add-to-wallet
  // Method: POST
  // Body: token, money
  const base_url = process.env.REACT_APP_API_ENV;
  const login_token = window.localStorage.getItem('token');
  return await axios
    .post(base_url + '/v1/users/add-to-wallet', {
      token: login_token,
    })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRollAmount = async () => {
  // This function is service used to get total roll of user, current used turn, current total bonus
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/users/get-roll-amount
  // Method: GET
  // return array object roll, current total bonus
  const base_url = process.env.REACT_APP_API_ENV;
  const login_token = window.localStorage.getItem('token');
  return await axios
    .post(base_url + '/v1/users/get-roll-amount', {
      token: login_token,
    })
    .then(response => {
      const currentLastTotalBonus = response.data.data.total_not_add;
      const rollUsed = response.data.data.rolled;
      const rollAmount = response.data.data.roll_amount;
      const rollAmountLeft = rollAmount - rollUsed;
      if (rollAmount === 0) {
        return {
          rollAmountLeft: 0,
          currentLastTotalBonus: 0,
        };
      } else {
        return {
          rollAmountLeft: rollAmountLeft,
          currentLastTotalBonus: currentLastTotalBonus,
        };
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export const resultGame = async () => {
  // This function is service used to get result of game
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/users/result
  // Method: GET
  const base_url = process.env.REACT_APP_API_ENV;
  return await axios
    .get(base_url + '/v1/result')
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getRatioWheelOption = async () => {
  // This function is service used to get option in whell of game
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/get-ratio
  // Method: GET
  const base_url = process.env.REACT_APP_API_ENV;
  return await axios
    .get(base_url + '/v1/get-ratio')
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getEventProgress = async () => {
  // This function is service used to event progress,
  // 1. Start Date
  // 2. End date
  // 3. Now time => thoi gian khi request
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/get-date-event
  // Method: GET
  // After get response, this service will handle data to return progess of event
  const base_url = process.env.REACT_APP_API_ENV;
  return await axios
    .get(base_url + '/v1/get-date-event')
    .then(response => {
      const startDate = Date.parse(response.data.data.start);
      const endDate = Date.parse(response.data.data.end);
      const nowDate = Date.parse(response.data.data.now);
      const totalTimeOfEvent = endDate - startDate;
      const currentTotalTimeOfEvent = nowDate - startDate;
      const processEvent = (currentTotalTimeOfEvent / totalTimeOfEvent) * 100;
      return processEvent;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getEventTime = async () => {
  // This function is service used to get time of event,
  // 1. Start Date
  // 2. End date
  // 3. Now time => thoi gian khi request
  // Request url : https://api.edunetwork.dev.gkcsoftware.com/api/v1/get-date-event
  // Method: GET
  // After get response, this service will handle data to return start date and end date
  const base_url = process.env.REACT_APP_API_ENV;
  return await axios
    .get(base_url + '/v1/get-date-event')
    .then(response => {
      let startDateConvert = _.replace(
        response.data.data.start,
        '-',
        '/',
      );
      startDateConvert = _.replace(startDateConvert, '-', '/');
      let endDateConvert = _.replace(
        response.data.data.end,
        '-',
        '/',
      );
      endDateConvert = _.replace(endDateConvert, '-', '/');
      return {
        startDate: startDateConvert,
        endDate: endDateConvert,
      };
    })
    .catch(error => {
      console.log(error);
    });
};
