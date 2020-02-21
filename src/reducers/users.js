import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER
} from "../constants.js";

const initialState = {
  user: null,
  // error: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      const user = { ...state.user };
      user.likedBooks.push(payload);
      return {
        ...state,
        user
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.data.user
      };
    case CREATE_USER_ERROR:
      return {
        loading: false,
        error: payload,
        user: null
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.data.user
      };
    case LOGIN_USER_ERROR:
      return {
        user: null,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
