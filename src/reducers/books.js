import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_ERROR,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  SET_FILTERS,
  VOTE_BOOK_REQUEST,
  VOTE_BOOK_SUCCESS
} from "../constants.js";

const initialState = {
  books: null,
  error: null,
  loading: false,
  filters: [],
  book: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case VOTE_BOOK_REQUEST: {
      const index = state.books.findIndex(i => {
        return i._id === payload.bookId;
      });
      const books = [...state.books];
      books[index].loading = true;
      return {
        ...state,
        books
      };
    }
    case VOTE_BOOK_SUCCESS:
      if (state.books) {
        const index = state.books.findIndex(i => {
          return i._id === payload.bookId;
        });
        const books = [...state.books];
        books[index].loading = false;
        books[index].voices = payload.voices;
        return {
          ...state,
          books
        };
      }
      return state;
    case SET_FILTERS:
      return {
        ...state,
        filters: payload || []
      };
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        books: null,
        error: null,
        loading: true
      };
    case GET_BOOKS_SUCCESS: {
      const books = payload.data.map(item => {
        return { loading: false, ...item };
      });
      return {
        ...state,
        loading: false,
        books: books
      };
    }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case GET_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        book: null,
        error: null
      };
    case GET_BOOK_SUCCESS: {
      return {
        ...state,
        loading: false,
        book: payload.data.book
      };
    }
    case GET_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
