import { AxiosResponse } from "axios";

import { IAction } from "../interfaces";
import { actionTypes } from "../constants";

export const createUserRequest = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: actionTypes.CREATE_USER_REQUEST,
    payload: data
  };
};

export const createUserSuccess = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: data
  };
};

export const createUserError = (
  error: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: actionTypes.CREATE_USER_ERROR,
    payload: error
  };
};

export const loginUserRequest = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: actionTypes.LOGIN_USER_REQUEST,
    payload: data
  };
};

export const loginUserSuccess = (
  data: AxiosResponse
): IAction<AxiosResponse> => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: data
  };
};

export const loginUserError = (): IAction<AxiosResponse> => {
  return {
    type: actionTypes.LOGIN_USER_ERROR
  };
};

export const updateUser = (data: AxiosResponse): IAction<AxiosResponse> => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: data
  };
};

export const logOut = (): IAction<AxiosResponse> => {
  return {
    type: actionTypes.LOGOUT_USER
  };
};
