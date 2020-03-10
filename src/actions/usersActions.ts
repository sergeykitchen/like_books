import { AxiosResponse } from "axios";

import { IAction } from "../interfaces";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER
} from "../constants";

export const createUserRequest = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: CREATE_USER_REQUEST,
    payload: data
  };
};

export const createUserSuccess = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: data
  };
};

export const createUserError = (
  error: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: CREATE_USER_ERROR,
    payload: error
  };
};

export const loginUserRequest = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: data
  };
};

export const loginUserSuccess = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data
  };
};

export const loginUserError = (): IAction<AxiosResponse> => {
  return {
    type: LOGIN_USER_ERROR
  };
};

export const updateUser = (data: AxiosResponse): IAction<AxiosResponse> => {
  return {
    type: UPDATE_USER,
    payload: data
  };
};

export const logOut = (): IAction<AxiosResponse> => {
  return {
    type: LOGOUT_USER
  };
};
