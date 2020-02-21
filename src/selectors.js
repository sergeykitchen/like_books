import { createSelector } from "reselect";

const filterSelector = state => state.books.filters;
const booksSelector = state => state.books.books;

export const filteredBooks = createSelector(
  booksSelector,
  filterSelector,
  (booksSelector, filterSelector) => {
    return filterSelector.length === 0
      ? booksSelector
      : booksSelector.filter(book => {
          return filterSelector.every(item => book.tags.includes(item.value));
        });
  }
);
