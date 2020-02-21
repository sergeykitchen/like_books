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
} from "../constants.js";

export const voteForBookRequest = id => ({
  type: VOTE_BOOK_REQUEST,
  payload: id
});
export const voteForBookSuccess = data => {
  return {
    type: VOTE_BOOK_SUCCESS,
    payload: data
  };
};
export const voteForBookError = error => ({
  type: VOTE_BOOK_ERROR,
  payload: error
});

export const setFilters = tags => ({
  type: SET_FILTERS,
  payload: tags
});

export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST
});

export const getBooksSuccess = books => ({
  type: GET_BOOKS_SUCCESS,
  payload: books
});

export const getBooksError = error => ({
  type: GET_BOOKS_ERROR,
  payload: error
});

export const getBookRequest = id => ({
  type: GET_BOOK_REQUEST,
  payload: id
});

export const getBookSuccess = data => ({
  type: GET_BOOK_SUCCESS,
  payload: data
});

export const getBookError = error => ({
  type: GET_BOOK_ERROR,
  payload: error
});
