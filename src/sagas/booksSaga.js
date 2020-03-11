import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Api from "../api";
import {
  getBooksSuccess,
  getBooksError,
  getBookSuccess,
  getBookError
} from "../actions/booksActions";
import { setError } from "../actions/errorAction";

import { actionTypes } from "../constants";

function* getBooks() {
  try {
    const books = yield call(Api.getBooks);
    yield put(getBooksSuccess(books));
  } catch (e) {
    yield put(getBooksError(e));
    yield put(setError(e));
  }
}

function* getBook(action) {
  try {
    const book = yield call(Api.getBook, action.payload);
    yield put(getBookSuccess(book));
  } catch (e) {
    yield put(getBookError(e));
  }
}

function* voteBook({ payload: { bookId } }) {
  try {
    yield call(Api.voteForBook, bookId);
  } catch (e) {
    yield put(setError(e));
  }
}

export function* voteBookSaga() {
  yield takeLatest(actionTypes.VOTE_BOOK_REQUEST, voteBook);
}

export function* getBookSaga() {
  yield takeEvery(actionTypes.GET_BOOK_REQUEST, getBook);
}
export function* getBooksSaga() {
  yield takeEvery(actionTypes.GET_BOOKS_REQUEST, getBooks);
}
