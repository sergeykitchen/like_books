import { actionTypes } from "../constants";
import { IAction } from "../interfaces";

export const setError = <T>(payload: T): IAction<T> => {
  return {
    type: actionTypes.SET_ERROR,
    payload: payload
  };
};
export const dropError = (): IAction => ({
  type: actionTypes.DROP_ERROR
});
