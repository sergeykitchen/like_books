import { createSelector } from "reselect";

import { IDefaultState, IBook, IFilter } from "./interfaces";

const filterSelector = (state: IDefaultState): [IFilter] => state.books.filters;
const booksSelector = (state: IDefaultState): [IBook] => state.books.books;

export const filteredBooks = createSelector(
  booksSelector,
  filterSelector,
  (booksSelector, filterSelector) => {
    if (!filterSelector.length) {
      return booksSelector;
    }
    return booksSelector.filter(book => {
      return filterSelector.every(item => book.tags.includes(item.value));
    });
  }
);
