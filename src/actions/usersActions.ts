import { IAction } from "../interfaces";
import { actionTypes } from "../constants";

export const createUserRequest = <T>(data: T): IAction<T> => {
  return {
    type: actionTypes.CREATE_USER_REQUEST,
    payload: data
  };
};

export const createUserSuccess = <T>(data: T): IAction<T> => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: data
  };
};

export const createUserError = (): IAction => {
  return {
    type: actionTypes.CREATE_USER_ERROR
  };
};

export const loginUserRequest = <T>(data: T): IAction<T> => {
  return {
    type: actionTypes.LOGIN_USER_REQUEST,
    payload: data
  };
};

export const loginUserSuccess = <T>(data: T): IAction<T> => {
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    payload: data
  };
};

export const loginUserError = (): IAction => {
  return {
    type: actionTypes.LOGIN_USER_ERROR
  };
};

// export const updateUser = (data: AxiosResponse): IAction<AxiosResponse> => {
//   return {
//     type: actionTypes.UPDATE_USER,
//     payload: data
//   };
// };

export const logOut = (): IAction => {
  return {
    type: actionTypes.LOGOUT_USER
  };
};
