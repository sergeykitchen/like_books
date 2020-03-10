import { SET_ERROR, DROP_ERROR } from "../constants";

interface IErrorAction {
  type: string;
  payload: any;
}

export const setError = (payload: any): IErrorAction => {
  return {
    type: SET_ERROR,
    payload: payload
  };
};
export const dropError = () => ({
  type: DROP_ERROR
});
