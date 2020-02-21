import { combineReducers } from "redux";
import users from "./users";
import books from "./books";
import error from "./error";

export default combineReducers({
  users,
  books,
  error
});
