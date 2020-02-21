import { all } from "redux-saga/effects";
import { createUserSaga, loginUserSaga } from "./userSaga";
import { getBooksSaga, voteBookSaga, getBookSaga } from "./booksSaga";

export default function* mySaga() {
  yield all([
    createUserSaga(),
    loginUserSaga(),
    getBooksSaga(),
    getBookSaga(),
    voteBookSaga()
  ]);
}
