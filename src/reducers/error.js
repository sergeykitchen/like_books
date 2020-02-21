import { SET_ERROR, DROP_ERROR } from "../constants";

const error = null;

export default (state = error, { type, payload }) => {
  switch (type) {
    case SET_ERROR: {
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
    case DROP_ERROR: {
      return null;
    }
    default:
      return state;
  }
};
