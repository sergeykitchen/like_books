import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { filteredBooks } from "../../selectors";
import { getBooksRequest, setFilters } from "../../actions/booksActions";
import { BookCard } from "../../components/bookCard";
import { CustomSelect } from "../../components/select";
import { Loader } from "../../components/loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const loadingBooks = useSelector(state => state.books.loading);
  const books = useSelector(state => filteredBooks(state));
  const filters = useSelector(state => state.books.filters);

  useEffect(
    useCallback(() => {
      if (!books && !loadingBooks) {
        dispatch(getBooksRequest());
      }
    }, [books, loadingBooks, dispatch]),
    []
  );

  const getCards = () => {
    if (!books) return null;
    return books.map(item => {
      return (
        <div key={item._id} className="col-sm-6 col-md-4 col-xl-3 mt-5">
          <BookCard item={item} />
        </div>
      );
    });
  };

  const setFiltersHandler = data => {
    dispatch(setFilters(data));
  };

  return (
    <div className="p-5 mw-1200 m-auto">
      <h2>Home page</h2>
      {loadingBooks ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-12">
            <CustomSelect filters={filters} setFilters={setFiltersHandler} />
          </div>
          {getCards()}
        </div>
      )}
    </div>
  );
};

export default HomePage;
