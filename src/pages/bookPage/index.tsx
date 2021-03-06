import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBookRequest } from "../../actions/booksActions";
import { Loader } from "../../components/loader";
import { BookDetails } from "../../components/bookDetails";
// import { ErrorMessage } from "../../components/errorMessage";
import { VotedUsersPanel } from "../../components/usersPanel";
import { IBooksState, IDefaultState, IVoice } from "../../interfaces";

const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector<IDefaultState, IBooksState>(state => state.books);
  const book = books.book;

  const isNeedFetch = useCallback(() => {
    return !book || book._id !== id;
  }, [book, id]);

  useEffect(
    useCallback(() => {
      if (!books.loading && isNeedFetch()) {
        dispatch(getBookRequest(id));
      }
    }, [dispatch, id, isNeedFetch, books]),
    []
  );

  /* 
  
  TODO
  */
  // if (books.error) {
  //   return <ErrorMessage error={books.error} />;
  // }

  return (
    <>
      {isNeedFetch() ? (
        <Loader />
      ) : (
        book && (
          <div className="p-1 p-lg-5 mw-1200 m-auto">
            <div className="row m-0">
              <div className=" col-md-8">
                <BookDetails book={book} />
              </div>
              <VotedUsersPanel voices={book.voices as IVoice[]} />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default BookPage;
