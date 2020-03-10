import { AxiosResponse } from "axios";

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

export const voteForBookRequest = (id: string): IAction<string> => ({
  type: VOTE_BOOK_REQUEST,
  payload: id
});
export const voteForBookSuccess = (data: any): any => {
  return {
    type: VOTE_BOOK_SUCCESS,
    payload: data
  };
};
export const voteForBookError = (error: any): any => ({
  type: VOTE_BOOK_ERROR,
  payload: error
});

export const setFilters = (tags: any): any => ({
  type: SET_FILTERS,
  payload: tags
});

export const getBooksRequest = () => ({
  type: GET_BOOKS_REQUEST
});

export const getBooksSuccess = (
  books: AxiosResponse
): IAction<AxiosResponse> => ({
  type: GET_BOOKS_SUCCESS,
  payload: books
});

export const getBooksError = (error: any): any => ({
  type: GET_BOOKS_ERROR,
  payload: error
});

export const getBookRequest = (id: any): any => ({
  type: GET_BOOK_REQUEST,
  payload: id
});

export const getBookSuccess = (data: any): any => ({
  type: GET_BOOK_SUCCESS,
  payload: data
});

export const getBookError = (error: any): any => ({
  type: GET_BOOK_ERROR,
  payload: error
});
