import { AxiosResponse } from "axios";
import { IAction, IUsersState } from "../interfaces";

import { actionTypes } from "../constants";

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
    // case actionTypes.UPDATE_USER:
    //   const user: IUser | null = Object.assign({}, state).user;
    //   user && user.likedBooks.push(payload);
    //   return {
    //     ...state,
    //     user
    //   };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null
      };
    case actionTypes.CREATE_USER_REQUEST:
      return {
        user: null,
        loading: true
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload ? payload.data.user : null
      };
    case actionTypes.CREATE_USER_ERROR:
      return {
        loading: false
      };
    case actionTypes.LOGIN_USER_REQUEST:
      return {
        user: null,
        loading: true
      };
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload ? payload.data.user : null
      };
    case actionTypes.LOGIN_USER_ERROR:
      return {
        loading: false
      };
    default:
      return state;
  }
};
