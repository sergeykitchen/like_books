import { actionTypes } from "../constants";

interface IErrorAction {
  type: string;
  payload: any;
}

export const setError = (payload: any): IErrorAction => {
  return {
    type: actionTypes.SET_ERROR,
    payload: payload
  };
};
export const dropError = () => ({
  type: actionTypes.DROP_ERROR
});
