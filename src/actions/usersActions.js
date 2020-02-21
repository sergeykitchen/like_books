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

export const createUserRequest = data => {
  return {
    type: CREATE_USER_REQUEST,
    payload: data
  };
};

export const createUserSuccess = data => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: data
  };
};

export const createUserError = error => {
  return {
    type: CREATE_USER_ERROR,
    payload: error
  };
};

export const loginUserRequest = data => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: data
  };
};

export const loginUserSuccess = data => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data
  };
};

export const loginUserError = error => {
  return {
    type: LOGIN_USER_ERROR,
    payload: error
  };
};

export const updateUser = data => {
  return {
    type: UPDATE_USER,
    payload: data
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_USER
  };
};
