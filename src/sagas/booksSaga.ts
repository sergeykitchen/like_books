import { call, put, takeEvery } from "redux-saga/effects";
import Api from "../api";
import {
  getBooksSuccess,
  getBooksError,
  getBookSuccess,
  getBookError
} from "../actions/booksActions";
import { setError } from "../actions/errorAction";

import { actionTypes } from "../constants";
import { IAction, IVoteResponse } from "../interfaces";

function* getBooks() {
  try {
    const books = yield call(Api.getBooks);
    yield put(getBooksSuccess(books));
  } catch (e) {
    yield put(getBooksError());
    yield put(setError(e));
  }
}

function* getBook(action: IAction<string>) {
  try {
    if (action.payload) {
      const book = yield call(Api.getBook, action.payload);
      yield put(getBookSuccess(book));
    }
  } catch (e) {
    yield put(getBookError());
    yield put(setError(e));
  }
}

function* voteBook(action: IAction<IVoteResponse>) {
  try {
    if (action.payload) {
      const bookId = (action.payload as IVoteResponse).bookId;
      yield call(Api.voteForBook, bookId);
    }
  } catch (e) {
    yield put(setError(e));
  }
}

export function* voteBookSaga() {
  yield takeEvery(actionTypes.VOTE_BOOK_REQUEST, voteBook);
}

export function* getBookSaga() {
  yield takeEvery(actionTypes.GET_BOOK_REQUEST, getBook);
}

export function* getBooksSaga() {
  yield takeEvery(actionTypes.GET_BOOKS_REQUEST, getBooks);
}
