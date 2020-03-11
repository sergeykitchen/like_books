import { actionTypes } from "../constants";
import { IAction } from "../interfaces";

export const voteForBookRequest = <T>(id: T): IAction<T> => ({
  type: actionTypes.VOTE_BOOK_REQUEST,
  payload: id
});
export const voteForBookSuccess = <T>(data: T): IAction<T> => {
  return {
    type: actionTypes.VOTE_BOOK_SUCCESS,
    payload: data
  };
};
export const voteForBookError = <T>(error: T): IAction<T> => ({
  type: actionTypes.VOTE_BOOK_ERROR,
  payload: error
});

export const setFilters = <T>(tags: T): IAction<T> => ({
  type: actionTypes.SET_FILTERS,
  payload: tags
});

export const getBooksRequest = (): IAction => ({
  type: actionTypes.GET_BOOKS_REQUEST
});

export const getBooksSuccess = <T>(books: T): IAction<T> => ({
  type: actionTypes.GET_BOOKS_SUCCESS,
  payload: books
});

export const getBooksError = (): IAction => ({
  type: actionTypes.GET_BOOKS_ERROR
});

export function getBookRequest<T>(id: T): IAction<T> {
  return {
    type: actionTypes.GET_BOOK_REQUEST,
    payload: id
  };
}

export const getBookSuccess = <T>(data: T): IAction<T> => ({
  type: actionTypes.GET_BOOK_SUCCESS,
  payload: data
});

export const getBookError = (): IAction => ({
  type: actionTypes.GET_BOOK_ERROR
});
