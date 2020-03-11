import { AxiosResponse } from "axios";
import { IAction, IBooksState, IBook, IVoteResponse } from "../interfaces";

import { actionTypes } from "../constants";

const initialState = {
  books: null,
  loading: false,
  filters: [],
  book: null
};

export default (
  state: IBooksState = initialState,
  action: IAction<AxiosResponse> | IAction<string> | IAction<IVoteResponse>
) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.VOTE_BOOK_REQUEST: {
      const { books } = state;
      const { bookId } = payload as IVoteResponse;
      let newBooks;
      if (books) {
        newBooks = books.map((i: IBook) => {
          if (i._id === bookId) {
            return { ...i, loading: true };
          }
          return { ...i };
        });
      }
      return {
        ...state,
        books: newBooks
      };
    }
    case actionTypes.VOTE_BOOK_SUCCESS:
      if (state.books) {
        const newBooks = state.books.map(i => {
          const bookId = (payload as IVoteResponse).bookId;
          if (i._id === bookId) {
            return {
              ...i,
              loading: false,
              voices: (payload as IVoteResponse).voices
            };
          }
          return { ...i };
        });
        return {
          ...state,
          books: newBooks
        };
      }
      return state;
    case actionTypes.SET_FILTERS:
      return {
        ...state,
        filters: payload || []
      };
    case actionTypes.GET_BOOKS_REQUEST:
      return {
        ...state,
        books: null,
        loading: true
      };
    case actionTypes.GET_BOOKS_SUCCESS: {
      const books = payload
        ? (payload as AxiosResponse).data.map((item: any) => {
            return { loading: false, ...item };
          })
        : null;

      return {
        ...state,
        loading: false,
        books: books
      };
    }
    case actionTypes.GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false
      };
    case actionTypes.GET_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        book: null
      };
    case actionTypes.GET_BOOK_SUCCESS: {
      return {
        ...state,
        loading: false,
        book: (payload as AxiosResponse).data.book
      };
    }
    case actionTypes.GET_BOOK_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
