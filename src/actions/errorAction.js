import { SET_ERROR, DROP_ERROR } from "../constants";

export const setError = payload => {
  return {
    type: SET_ERROR,
    payload: payload
  };
};
export const dropError = () => ({
  type: DROP_ERROR
});
