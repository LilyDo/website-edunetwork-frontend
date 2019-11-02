import * as types from '../actions';

const initialState = {
  loading: false,
  courses: [],
  courseDetail: {},
  userCourses: [],
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload.data,
      };
    case types.GET_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.GET_COURSE_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        courseDetail: action.payload.data,
      };
    case types.GET_COURSE_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.GET_USER_COURSESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_COURSESS_SUCCESS:
      return {
        ...state,
        loading: false,
        userCourses: action.payload.data,
      };
    case types.GET_USER_COURSESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
