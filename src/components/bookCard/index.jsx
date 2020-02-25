import React from "react";
import "./styles.scss";
import { voteForBookRequest } from "../../actions/booksActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BookCover } from "../bookCover";

export const BookCard = ({
  item: {
    voices = [],
    title,
    author,
    price,
    about,
    tags,
    picture: bookImage,
    _id,
    loading
  }
}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  const vote = () => {
    dispatch(
      voteForBookRequest({
        bookId: _id,
        userId: user._id
      })
    );
  };

  const isUserVoted = () => {
    return user && voices.includes(user._id);
  };

  const cutText = (text, length = 25) => {
    const words = text.split(" ");
    return words.length <= length
      ? text
      : words.slice(0, length).join(" ") + "...";
  };

  return (
    <div className="card">
      <BookCover image={bookImage} />
      <div className="card-body">
        <h5 className="card-title capitalize mb-1">
          <Link to={`/book_page/${_id}`}> {title}.</Link>
        </h5>
        <p>Author: {author}.</p>
        <div>
          {tags.map((item, index) => (
            <span key={index} className="card-tag badge badge-info">
              {item}
            </span>
          ))}
        </div>
        <p className="card-text text-indent mt-4">
          {cutText(about)} <Link to={`/book_page/${_id}`}>Show more</Link>
        </p>
        <div className="clearfix mt-auto">
          <p className="float-right">${price}</p>
        </div>
        {isUserVoted() ? (
          <h6>You've already voted</h6>
        ) : (
          <button
            disabled={!user || loading}
            onClick={vote}
            className="btn btn-primary btn-block"
          >
            {loading ? "Wait..." : "Vote!"}
          </button>
        )}
        <p className="card-voices">Voices: {voices.length}</p>
      </div>
    </div>
  );
};
