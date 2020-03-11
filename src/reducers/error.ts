import { actionTypes } from "../constants";
import { IError } from "../interfaces";

const error: IError | null = null;

interface IErrorAction {
  type: string;
  payload: any;
}

export default (state = error, action: IErrorAction): IError | null => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.SET_ERROR: {
      if (payload.response) {
        return {
          message: payload.response.data.message,
          statusText: payload.response.statusText
        };
      }
      return {
        message: payload.message,
        statusText: ""
      };
    }
    case actionTypes.DROP_ERROR: {
      return null;
    }
    default:
      return state;
  }
};
