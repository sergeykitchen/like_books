import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  SET_FILTERS,
  VOTE_BOOK_REQUEST,
  VOTE_BOOK_SUCCESS,
  VOTE_BOOK_ERROR
} from "../constants";
import { IAction } from "../interfaces";

export const voteForBookRequest = <T>(id: T): IAction<T> => ({
  type: VOTE_BOOK_REQUEST,
  payload: id
});
export const voteForBookSuccess = <T>(data: T): IAction<T> => {
  return {
    type: VOTE_BOOK_SUCCESS,
    payload: data
  };
};
export const voteForBookError = <T>(error: T): IAction<T> => ({
  type: VOTE_BOOK_ERROR,
  payload: error
});

export const setFilters = <T>(tags: T): IAction<T> => ({
  type: SET_FILTERS,
  payload: tags
});

export const getBooksRequest = (): IAction => ({
  type: GET_BOOKS_REQUEST
});

export const getBooksSuccess = <T>(books: T): IAction<T> => ({
  type: GET_BOOKS_SUCCESS,
  payload: books
});

export const getBooksError = (): IAction => ({
  type: GET_BOOKS_ERROR
});

export const getBookRequest = <T>(id: T): IAction<T> => ({
  type: GET_BOOK_REQUEST,
  payload: id
});

export const getBookSuccess = <T>(data: T): IAction<T> => ({
  type: GET_BOOK_SUCCESS,
  payload: data
});

export const getBookError = (): IAction => ({
  type: GET_BOOK_ERROR
});
