import { AxiosResponse } from "axios";
import { IAction, IUsersState } from "../interfaces";

import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER
  // UPDATE_USER
} from "../constants";

const initialState = {
  user: null,
  loading: false
};

export default (
  state = initialState,
  action: IAction<AxiosResponse>
): IUsersState => {
  const { type, payload } = action;
  switch (type) {
    // case UPDATE_USER:
    //   const user: IUser | null = Object.assign({}, state).user;
    //   user && user.likedBooks.push(payload);
    //   return {
    //     ...state,
    //     user
    //   };
    case LOGOUT_USER:
      return {
        ...state,
        user: null
      };
    case CREATE_USER_REQUEST:
      return {
        user: null,
        loading: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload ? payload.data.user : null
      };
    case CREATE_USER_ERROR:
      return {
        loading: false
      };
    case LOGIN_USER_REQUEST:
      return {
        user: null,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload ? payload.data.user : null
      };
    case LOGIN_USER_ERROR:
      return {
        loading: false
      };
    default:
      return state;
  }
};
