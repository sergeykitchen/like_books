import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../api";
import {
  createUserSuccess,
  createUserError,
  loginUserSuccess,
  loginUserError
} from "../actions/usersActions";

import { setError } from "../actions/errorAction";

import { CREATE_USER_REQUEST, LOGIN_USER_REQUEST } from "../constants.js";

function* createUser(action) {
  try {
    const user = yield call(Api.createUser, action.payload);
    yield put(createUserSuccess(user));
  } catch (e) {
    yield put(createUserError(e));
    yield put(setError(e));
  }
}

function* loginUser(action) {
  try {
    let user;
    if (!action.payload) {
      user = yield call(Api.logInByToken);
    } else {
      user = yield call(Api.loginUser, action.payload);
    }
    yield put(loginUserSuccess(user));
  } catch (e) {
    yield put(loginUserError(e));
    if (action.payload) {
      yield put(setError(e));
    }
  }
}

export function* createUserSaga() {
  yield takeEvery(CREATE_USER_REQUEST, createUser);
}

export function* loginUserSaga() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUser);
}
