import { call, put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import Api from "../api";
import {
  createUserSuccess,
  createUserError,
  loginUserSuccess,
  loginUserError
} from "../actions/usersActions";

import { setError } from "../actions/errorAction";

import { actionTypes } from "../constants";
import { IAction, INewUser, IExistUser } from "../interfaces";

function* createUser(action: IAction<INewUser>) {
  try {
    if (action.payload) {
      const user = yield call(Api.createUser, action.payload);
      yield put(createUserSuccess(user));
    }
  } catch (e) {
    yield put(createUserError());
    yield put(setError(e));
  }
}

function* loginUser(action: IAction<IExistUser>) {
  try {
    let user: AxiosResponse;
    if (!action.payload) {
      user = yield call(Api.logInByToken);
    } else {
      user = yield call(Api.loginUser, action.payload);
    }
    yield put(loginUserSuccess(user));
  } catch (e) {
    yield put(loginUserError());
    if (action.payload) {
      yield put(setError(e));
    }
  }
}

export function* createUserSaga() {
  yield takeEvery(actionTypes.CREATE_USER_REQUEST, createUser);
}

export function* loginUserSaga() {
  yield takeEvery(actionTypes.LOGIN_USER_REQUEST, loginUser);
}
